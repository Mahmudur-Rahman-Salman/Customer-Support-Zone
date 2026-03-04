import React from "react";
import TicketCard from "./TicketCard";
import TaskStatus from "./TaskStatus";

const MainSection = ({
  tickets,
  selectedTicketId,
  inProgressIds,
  resolvedIds,
  onSelectTicket,
  onCompleteTicket,
}) => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: 2-column grid across two-thirds */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                isSelected={ticket.id === selectedTicketId}
                isInProgress={inProgressIds.has(ticket.id)}
                isResolved={resolvedIds.has(ticket.id)}
                onSelect={() => onSelectTicket(ticket.id)}
              />
            ))}
          </div>
        </div>

        {/* Right: Task Status panel */}
        <div className="lg:col-span-1">
          <TaskStatus
            tickets={tickets}
            inProgressIds={inProgressIds}
            resolvedIds={resolvedIds}
            onComplete={onCompleteTicket}
            onSelect={onSelectTicket} // optional: clicking a task can re-select card
          />
        </div>
      </section>
    </div>
  );
};

export default MainSection;
