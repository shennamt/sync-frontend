import React, { useState } from "react";

const initialData = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      { id: "task-1", content: "Task 1" },
      { id: "task-2", content: "Task 2" },
      { id: "task-3", content: "Task 3" }
    ]
  },
  {
    id: "in-progress",
    title: "In Progress",
    tasks: [
      { id: "task-4", content: "Task 4" },
      { id: "task-5", content: "Task 5" }
    ]
  },
  {
    id: "done",
    title: "Done",
    tasks: [{ id: "task-6", content: "Task 6" }]
  }
];

const KanbanBoard = () => {
  const [data, setData] = useState(initialData);

  return (
    <div className="kanban-board">
      {data.map((column) => (
        <div key={column.id} className="kanban-column">
          <h3>{column.title}</h3>
          <div className="kanban-tasks">
            {column.tasks.map((task) => (
              <div key={task.id} className="kanban-task">
                {task.content}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
