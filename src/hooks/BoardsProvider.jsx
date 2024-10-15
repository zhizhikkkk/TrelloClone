import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";

const BoardsContext = createContext();

export const useBoards = () => {
  return useContext(BoardsContext);
};

export const BoardsProvider = () => {
  const getRandomId = () => {
    return Math.random().toString(36).substring(2, 10);
  };

  const getRandomColor = () => {
    const colors = [
      "#7a5195",
      "#ef5675",
      "#2d5d34",
      "#0f4c75",
      "#00b3e3",
      "#ff6f61",
      "#003f5c",
      "#ff165d",
      "#f0e130",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const [boardsList, setBoardsList] = useState([
    { id: "1", name: "Work", color: getRandomColor() },
    { id: "2", name: "Home", color: getRandomColor() },
    { id: "3", name: "School", color: getRandomColor() },
  ]);

  const handleAddBoard = (newBoardName) => {
    const newBoardId = getRandomId();
    setBoardsList((prevBoards) => [
      ...prevBoards,
      { id: newBoardId, name: newBoardName, color: getRandomColor() },
    ]);
  };

  return (
    <BoardsContext.Provider value={{ boardsList, handleAddBoard }}>
      <Outlet />
    </BoardsContext.Provider>
  );
};
