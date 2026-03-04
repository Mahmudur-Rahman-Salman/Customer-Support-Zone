import React from "react";

const TaskStatus = ({
  tickets,
  inProgressIds,
  resolvedIds,
  onComplete,
  onSelect,
}) => {
  const inProgressList = tickets.filter((t) => inProgressIds.has(t.id));
  const resolvedList = tickets.filter((t) => resolvedIds.has(t.id));
  return (
    <>
      <div className="p-4 bg-white text-gray-900 rounded-md shadow-sm">
        <h4 className="font-bold mb-3">Task Status</h4>

        <div>
          <h5 className="text-sm font-medium">
            In Progress ({inProgressList.length})
          </h5>
          <ul className="mt-2 space-y-2">
            {inProgressList.length === 0 && (
              <li className="text-xs text-gray-500">No tasks in-progress</li>
            )}
            {inProgressList.map((t) => (
              <li
                key={t.id}
                className="flex justify-between items-center p-2 border rounded text-gray-800"
              >
                <button className="text-left" onClick={() => onSelect(t.id)}>
                  {t.title}
                </button>
                <button
                  className="ml-2 px-3 py-1 bg-green-600 text-white rounded text-sm"
                  onClick={() => onComplete(t.id)}
                >
                  Complete
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h5 className="text-sm font-medium">
            Resolved ({resolvedList.length})
          </h5>
          <ul className="mt-2 text-xs text-gray-600">
            {resolvedList.map((t) => (
              <li key={t.id} className="py-1">
                {t.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TaskStatus;
