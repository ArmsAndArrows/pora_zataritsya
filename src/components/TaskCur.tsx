import React from "react";

// Define prop types for TaskCur
interface TaskCurProps {
  taskKey: string;
  taskTitle: string;
  handleTaskClick: (clickedKey: string) => void;
  isClicked: boolean;
}

const TaskCur: React.FC<TaskCurProps> = ({
  taskKey,
  taskTitle,
  handleTaskClick,
  isClicked,
}) => {
  return (
    <li
      className={`task-item ${isClicked ? "clicked" : ""}`}
      onClick={() => handleTaskClick(taskKey)} // Trigger handleTaskClick when the task is clicked
    >
      {taskTitle}
    </li>
  );
};

export default TaskCur;
