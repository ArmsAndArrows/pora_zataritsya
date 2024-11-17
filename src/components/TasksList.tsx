import React from "react";
import TaskCur from "./TaskCur";
import "./TaskList.css";

// Define the Task type interface
interface Task {
  key: string;
  title: string;
  clicked: boolean;
}

interface TasksListProps {
  tasks: Task[];
  handleTaskClick: (clickedKey: string) => void;
}

const TasksList: React.FC<TasksListProps> = ({ tasks, handleTaskClick }) => {
  return (
    <div className="container-tasks">
      <ul className="list-tasks">
        {tasks.map((task) => (
          <TaskCur
            key={task.key} // unique key for each task in the list
            taskKey={task.key} // pass task key
            taskTitle={task.title} // pass task title
            handleTaskClick={handleTaskClick} // pass the click handler
            isClicked={task.clicked} // pass clicked status
          />
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
