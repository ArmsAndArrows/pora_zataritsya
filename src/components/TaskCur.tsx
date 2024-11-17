import React from "react";
import CheckIcon from "../icons/CheckIcon";
import "./TaskCur.css";

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
    <div className="wrapper-task">
      <li
        className={`task-item ${isClicked ? "wrapper-task-clicked" : ""}`}
        onClick={() => handleTaskClick(taskKey)} // Trigger handleTaskClick when the task is clicked
      >
        <p className="text-task"> {taskTitle}</p>
      </li>
      <div
        className={`checkbox ${isClicked ? "checkbox-clicked" : ""}`}
        onClick={() => handleTaskClick(taskKey)}
      >
        <CheckIcon />
      </div>
    </div>
  );
};

export default TaskCur;
