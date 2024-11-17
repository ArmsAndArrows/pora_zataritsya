import CheckIcon from "../icons/CheckIcon";
import "./Task.css";

function TaskCur({ taskTitle, taskKey, isClicked, handleTaskClick }) {
  return (
    <li className={`wrapper-task ${isClicked ? "wrapper-task-clicked" : ""}`}>
      <span className="text-task">{taskTitle}</span>
      <div
        onClick={() => handleTaskClick(taskKey)}
        aria-roledescription="checkbox"
        className={`checkbox ${isClicked ? "checkbox-clicked" : ""}`}
      >
        {isClicked && <CheckIcon />}
      </div>
    </li>
  );
}

export default TaskCur;
