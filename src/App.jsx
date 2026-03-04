import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { toast, ToastContainer } from "react-toastify";
import MainSection from "./components/MainSection";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [tickets, setTickets] = useState([]); // Ticket[]
  const [selectedTicketId, setSelectedTicketId] = useState(null);
  const [inProgressIds, setInProgressIds] = useState(new Set());
  const [resolvedIds, setResolvedIds] = useState(new Set());

  useEffect(() => {
    fetch("/data.json")
      .then((r) => r.json())
      .then(setTickets);
  }, []);

  // Handlers passed down
  const handleSelectTicket = (ticketId) => {
    const ticket = tickets.find((t) => t.id === ticketId);
    setSelectedTicketId(ticketId);

    if (resolvedIds.has(ticketId)) {
      toast.info(`${ticket.title} is already resolved.`);
      return;
    }

    if (inProgressIds.has(ticketId)) {
      toast.info(`${ticket.title} is already in progress.`);
      return;
    }

    setInProgressIds((prev) => {
      const next = new Set(prev);
      next.add(ticketId);
      return next;
    });

    toast.success(`${ticket.title} moved to In-Progress.`);
  };

  const handleCompleteTicket = (ticketId) => {
    const ticket = tickets.find((t) => t.id === ticketId);
    setInProgressIds((prev) => {
      const next = new Set(prev);
      next.delete(ticketId);
      return next;
    });
    setResolvedIds((prev) => {
      const next = new Set(prev);
      next.add(ticketId);
      return next;
    });
    toast.success(`${ticket.title} marked complete and moved to Resolved.`);
  };

  const inProgressCount = inProgressIds.size;
  const resolvedCount = resolvedIds.size;

  return (
    <>
      <div className="bg-white min-h-screen">
        <Navbar></Navbar>
        <Banner inProgress={inProgressCount} resolved={resolvedCount}></Banner>
        <MainSection
          tickets={tickets}
          selectedTicketId={selectedTicketId}
          inProgressIds={inProgressIds}
          resolvedIds={resolvedIds}
          onSelectTicket={handleSelectTicket}
          onCompleteTicket={handleCompleteTicket}
        ></MainSection>
        <Footer></Footer>

        <ToastContainer position="top-right"></ToastContainer>
      </div>
    </>
  );
}

export default App;
