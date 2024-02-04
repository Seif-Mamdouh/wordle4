import React from "react";

const Header = () => {
  return (
    <div
      style={{
        fontSize: "60px",
        // padding: "2%",
        background: `linear-gradient(to right, #ff8a00, #da1b60)`,
        color: "transparent",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: "5px",
      }}
    >
      WORDLE
    </div>
  );
};

export default Header;
