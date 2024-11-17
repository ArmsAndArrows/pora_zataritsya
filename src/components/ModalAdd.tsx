import React, { useState, useEffect } from "react";
import CloseIcon from "../icons/CloseIcon";
import MicIcon from "../icons/MicIcon";
import ButtonConfirm from "./ButtonConfirm";
import "./ModalAdd.css";

interface ModalAddProps {
  isModalShown: boolean;
  handleShow: () => void;
  handleNewRecord: (newTask: {
    key: string;
    title: string;
    clicked: boolean;
  }) => void;
}

const ModalAdd: React.FC<ModalAddProps> = ({
  isModalShown,
  handleShow,
  handleNewRecord,
}) => {
  const [newTask, setNewTask] = useState<string>("");
  const [isLabelShown, setIsLabelShown] = useState<boolean>(false);
  const [isMicActive, setIsMicActive] = useState<boolean>(false);

  useEffect(() => {
    if (isLabelShown) {
      const timer = setTimeout(() => setIsLabelShown(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isLabelShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newTask) {
      setIsLabelShown(true);
      return;
    }

    const newTaskObj = {
      key: crypto.randomUUID(),
      title: newTask,
      clicked: false,
    };
    handleNewRecord(newTaskObj);

    setNewTask("");
    setIsLabelShown(false);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleMicRecord = () => {
    setIsMicActive(true);

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error("Speech Recognition API not supported.");
      alert("Speech recognition API is not supported in your browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "ru-RU";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setNewTask(transcript);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.onend = () => {
      console.log("Speech recognition ended.");
      setIsMicActive(false);
    };

    recognition.start();
  };

  const handleCloseModal = () => {
    setNewTask("");
    handleShow();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`wrapper-modal ${isModalShown ? "modal-is-shown" : ""}`}
    >
      <div className="icon-box" onClick={handleCloseModal}>
        <CloseIcon />
      </div>

      <div className="modal-content">
        <h2 className="text-modal-title">В список :</h2>
        <div className="input-wrapper">
          <label
            htmlFor="input"
            className={`label-err ${isLabelShown ? "label-err-shown" : ""}`}
          >
            Не оставляй меня пустым
          </label>
          <input
            className="input-text"
            type="text"
            placeholder="светящийся кактус..."
            onChange={handleFormChange}
            value={newTask}
          />
          <div
            className={`mic-icon-wrapper ${
              isMicActive ? "mic-icon-wrapper-active" : ""
            }`}
            onClick={handleMicRecord}
          >
            <MicIcon />
          </div>
        </div>
        <ButtonConfirm />
      </div>
    </form>
  );
};

export default ModalAdd;
