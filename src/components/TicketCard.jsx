import React from "react";

const TicketCard = ({
  ticket,
  isSelected,
  isInProgress,
  isResolved,
  onSelect,
}) => {
  const border = isSelected ? "border-blue-500" : "border-gray-200";
  const opacity = isResolved ? "opacity-60" : "opacity-100";
  return (
    <>
      <article
        onClick={() => onSelect(ticket.id)}
        className={` p-4 rounded-md bg-white text-gray-900 border shadow-sm ${border} ${opacity} cursor-pointer`}
      >
        <div className="flex justify-between items-start">
          <h3 className="font-semibold">{ticket.title}</h3>
          <span className="text-sm">{ticket.priority}</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">{ticket.description}</p>
        <div className="mt-3 text-xs text-gray-500 flex justify-between">
          <span>{ticket.customer}</span>
          <span>{ticket.createdAt}</span>
        </div>
        {isInProgress && (
          <div className="mt-2 text-xs text-amber-600">● In progress</div>
        )}
        {isResolved && (
          <div className="mt-2 text-xs text-green-600">✔ Resolved</div>
        )}
      </article>
    </>
  );
};

export default TicketCard;
