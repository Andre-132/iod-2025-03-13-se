import React, { useState, createContext, useContext } from "react";

export const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy((prevMood) => !prevMood);
  };

  return (
    <MoodContext.Provider value={{ isHappy, toggleMood }}>
      {children}
    </MoodContext.Provider>
  );
};

const Emoji = () => {
  const { isHappy, toggleMood } = useContext(MoodContext);

  return (
    <div
      className="Emoji-border"
      style={{ textAlign: "center", fontSize: "3rem", marginTop: "2rem" }}
    >
      <div>{isHappy ? "😊" : "😢"}</div>
      <button
        onClick={toggleMood}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem", fontSize: "1rem" }}
      >
        Change Mood
      </button>
    </div>
  );
};

export default Emoji;
