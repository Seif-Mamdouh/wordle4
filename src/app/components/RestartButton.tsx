import React from "react";

const RestartButton = ({ onClick }: { onClick: any }) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "#4CAF50" /* Green */,
          border: "none",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          marginTop: "20px",
          margin: "4px 2px",
          cursor: "pointer",
          borderRadius: "12px",
        }}
        onClick={onClick}
      >
        Restart the game?
      </button>
    </div>
  );
};

export default RestartButton;
