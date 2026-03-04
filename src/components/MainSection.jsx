import React from "react";

const MainSection = ({
  tickets,
  inProgress,
  onSelectTicket,
  onResolveTicket,
}) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: Customer Tickets */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Customer Tickets</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  onClick={() => onSelectTicket(ticket)}
                  className="cursor-pointer bg-white border rounded-lg p-4 hover:shadow-md transition"
                >
                  <h3 className="font-semibold">{ticket.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {ticket.description}
                  </p>

                  <div className="flex justify-between text-xs text-gray-400 mt-3">
                    <span>{ticket.customer}</span>
                    <span>{ticket.priority}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Task Status */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Task Status</h2>

            <div className="space-y-3">
              {inProgress.map((ticket) => (
                <div
                  key={ticket.id}
                  className="bg-white border rounded-lg p-4 flex justify-between items-center"
                >
                  <span className="font-medium text-sm">{ticket.title}</span>

                  <button
                    onClick={() => onResolveTicket(ticket)}
                    className="text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Complete
                  </button>
                </div>
              ))}

              {inProgress.length === 0 && (
                <p className="text-sm text-gray-400">No tasks in progress</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
