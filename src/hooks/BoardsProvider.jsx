import React, { createContext, useContext, useState, useEffect } from "react";
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

  // Инициализируем состояние из localStorage, если оно есть
  const initialBoards = JSON.parse(localStorage.getItem("boards")) || [
    { id: "1", name: "Work", color: getRandomColor() },
    { id: "2", name: "Home", color: getRandomColor() },
    { id: "3", name: "School", color: getRandomColor() },
  ];

  const [boardsList, setBoardsList] = useState(initialBoards);

  const handleAddBoard = (newBoardName) => {
    const newBoardId = getRandomId();
    const newBoard = { id: newBoardId, name: newBoardName, color: getRandomColor() };
    setBoardsList((prevBoards) => {
      const updatedBoards = [...prevBoards, newBoard];
      // Сохраняем обновленный список досок в localStorage
      localStorage.setItem("boards", JSON.stringify(updatedBoards));
      return updatedBoards;
    });
  };

  // Добавляем метод для удаления доски
  const handleDeleteBoard = (boardId) => {
    setBoardsList((prevBoards) => {
      const updatedBoards = prevBoards.filter((board) => board.id !== boardId);
      localStorage.setItem("boards", JSON.stringify(updatedBoards)); // Сохраняем изменения
      return updatedBoards;
    });
  };

  // Используем useEffect для сохранения изменений в localStorage
  useEffect(() => {
    localStorage.setItem("boards", JSON.stringify(boardsList));
  }, [boardsList]);

  return (
    <BoardsContext.Provider value={{ boardsList, handleAddBoard, handleDeleteBoard }}>
      <Outlet />
    </BoardsContext.Provider>
  );
};
