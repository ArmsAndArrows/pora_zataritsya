import { useState, useEffect } from "react";

import TitleBox from "./components/TitleBox";
import ModalAdd from "./components/ModalAdd";
import Button from "./components/Button";
import TasksList from "./components/TasksList";
import CactusModel from "./components/CactusModel";

// Define types
type Task = {
  key: string;
  title: string;
  clicked: boolean;
};

type NewRecord = Task;

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem("Tasks");
    const parsedTasks = storedTasks ? JSON.parse(storedTasks) : [];
    return Array.isArray(parsedTasks) ? parsedTasks : []; // Default to empty array
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  let anyTaskClicked = tasks.some((task) => task.clicked);

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskClick = (clickedKey: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.key === clickedKey ? { ...task, clicked: !task.clicked } : task
      )
    );
  };

  function handleDeleteTasks() {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.clicked));
  }

  function handleShowModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleNewRecord(record: NewRecord) {
    setTasks((prevTasks) => [...prevTasks, record]);
    setIsModalOpen(false);
  }

  return (
    <div className="App">
      <main className="wrapper">
        <TitleBox isModalOpen={isModalOpen} />
        {tasks.length === 0 && <CactusModel />}
        {tasks.length > 0 && (
          <TasksList handleTaskClick={handleTaskClick} tasks={tasks} />
        )}
        <ModalAdd
          isModalShown={isModalOpen}
          handleShow={handleShowModal}
          handleNewRecord={handleNewRecord}
        />
        <Button
          isModalOpen={isModalOpen}
          handleDeleteTasks={handleDeleteTasks}
          anyTaskClicked={anyTaskClicked}
          handleShowModal={handleShowModal}
        />
      </main>
    </div>
  );
}

export default App;
