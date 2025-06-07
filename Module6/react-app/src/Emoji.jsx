import { useState } from "react";

const Emoji = () => {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy((prevMood) => !prevMood);
  };

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
