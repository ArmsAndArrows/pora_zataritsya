import React from "react";
import TaskCur from "./TaskCur";
import "./TaskList.css";

interface Task {
  key: string;
  title: string;
  clicked: boolean;
}

interface TasksListProps {
  tasks: Task[];
  handleTaskClick: (clickedKey: string) => void;
}

const TasksList: React.FC<TasksListProps> = ({ handleTaskClick, tasks }) => {
  return (
    <div className="container-tasks">
      <ul className="list-tasks">
        {tasks.map((task) => (
          <TaskCur
            taskTitle={task.title}
            taskKey={task.key}
            key={task.key}
            handleTaskClick={handleTaskClick}
            isClicked={task.clicked}
          />
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
