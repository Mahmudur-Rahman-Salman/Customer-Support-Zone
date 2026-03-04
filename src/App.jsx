import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { toast, ToastContainer } from "react-toastify";
import MainSection from "./components/MainSection";

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json").then((res) =>
      res
        .json()
        .then((data) => {
          setTickets(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        }),
    );
  }, []);

  if (loading) {
    return (
      <div>
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

  const handleSelectTicket = (ticket) => {
    setInProgress((prev) => [...prev, ticket]);
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    toast.info(`Ticket ${ticket.id} moved to In Progress`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleResolveTicket = (ticket) => {
    setResolved((prev) => [...prev, ticket]);
    setInProgress((prev) => prev.filter((t) => t.id !== ticket.id));
    toast.success(`Ticket ${ticket.id} resolved`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <div className="bg-white">
        <Navbar></Navbar>
        <Banner
          inProgress={inProgress.length}
          resolved={resolved.length}
        ></Banner>
        <MainSection
          tickets={tickets}
          inProgress={inProgress}
          resolved={resolved}
          onSelectTicket={handleSelectTicket}
          onResolveTicket={handleResolveTicket}
        ></MainSection>

        <ToastContainer position="top-right"></ToastContainer>
      </div>
    </>
  );
}

export default App;
