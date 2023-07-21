"use client";
import { useState, useEffect } from "react";

export type FlashMessageProps = {
  title?: string;
  message: string;
  duration?: number;
  color?: "red" | "blue" | "yellow" | "green";
  onClose?: () => void;
};

const FlashMessage: React.FC<FlashMessageProps> = ({
  title,
  message,
  duration = 6000,
  color = "blue",
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) {
        onClose();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  const colors = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    green: "bg-green-500",
  };

  const bgColor = colors[color] || colors["blue"];

  return (
    <>
      {visible && (
        <div className={`fixed top-4 right-4 p-4 text-white rounded-md ${bgColor}`}>
          {title && <h1 className={`font-bold mb-2 bg-transparent text-lg ${bgColor}`}>{title}</h1>}
          <p className={`${bgColor}`}>{message}</p>
        </div>
      )}
    </>
  );
};

export default FlashMessage;
