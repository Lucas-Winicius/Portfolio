"use client";
import { CaretCircleUp } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

const ArrowToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.scrollHeight;
    const pixelsRemaining = bodyHeight - (scrollY + windowHeight);

    if (window.scrollY > 300 && pixelsRemaining > 65) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 p-2 rounded-full bg-transparent flex justify-center items-center ${
        isVisible ? "visible" : "invisible"
      }`}
      onClick={scrollToTop}
    >
      <CaretCircleUp className="cursor-pointer" size={45} />
    </div>
  );
};

export default ArrowToTop;
