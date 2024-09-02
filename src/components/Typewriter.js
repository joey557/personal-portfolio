import React, { useState, useEffect } from "react";
import "../App.css";

const Typewriter = ({ text, typingDelay = 300, deletingDelay = 150 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(typingDelay);

  useEffect(() => {
    let timer;
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length - 1));
        setTypingSpeed(deletingDelay);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length + 1));
        setTypingSpeed(typingDelay);
      }, typingSpeed);
    }

    if (!isDeleting && displayText === text) {
      setIsDeleting(true);
      setTypingSpeed(1500); // Pause before deleting
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(500); // Pause before starting over
    }

    return () => clearTimeout(timer);
  }, [
    displayText,
    isDeleting,
    text,
    typingDelay,
    deletingDelay,
    typingSpeed,
    loopNum,
  ]);

  return (
    <div className="typewriter">
      <h2>{displayText}</h2>
    </div>
  );
};

export default Typewriter;
