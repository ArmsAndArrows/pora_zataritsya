import React from "react";
import "./Button.css";
import PlusIcon from "../icons/PlusIcon";

interface ButtonProps {
  anyTaskClicked: boolean;
  handleDeleteTasks: () => void;
  handleShowModal: () => void;
  isModalOpen: boolean;
}

const Button: React.FC<ButtonProps> = ({
  anyTaskClicked,
  handleDeleteTasks,
  handleShowModal,
  isModalOpen,
}) => {
  return (
    <button
      onClick={anyTaskClicked ? handleDeleteTasks : handleShowModal}
      className="box-button"
    >
      <PlusIcon />
      <span className="text-button">
        {anyTaskClicked ? "Удалить" : isModalOpen ? "Закрыть" : "Добавить"}
      </span>
    </button>
  );
};

export default Button;
