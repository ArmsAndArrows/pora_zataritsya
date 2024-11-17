import React, { useState, useEffect } from "react";
import "./TitleBox.css";

interface TitleBoxProps {
  isModalOpen: boolean;
}

const TitleBox: React.FC<TitleBoxProps> = ({ isModalOpen }) => {
  const [today, setToday] = useState<string>(new Date().toLocaleString());

  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`box-title ${isModalOpen ? "box-title-hidden" : ""}`}>
      <p className="text-date">{today}</p>
      <h1 className="text-title">Пора затариться</h1>
    </div>
  );
};

export default TitleBox;
