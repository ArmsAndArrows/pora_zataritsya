import { useState, useEffect } from "react";

import TitleBox from "./components/TitleBox.tsx";
import ModalAdd from "./components/ModalAdd.tsx";
import Button from "./components/Button.tsx";
import TasksList from "./components/TasksList.tsx";
import CactusModel from "./components/CactusModel.tsx";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("Tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  let anyTaskClicked = tasks.some((task) => task.clicked === true);

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskClick = (clickedKey) => {
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

  function handleNewRecord(record) {
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
