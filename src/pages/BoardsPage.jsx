import { AddBoard } from "../components/AddBoard";
import { Navbar } from "../components/Navbar";
import { Board } from "../components/Board";
import { useState } from "react";

const BoardsPage = () => {
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

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return randomColor;
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
    <div className="font-trello h-screen w-screen bg-slate-100 overflow-auto">
      <Navbar />
      <div className="py-24 px-6">
        <AddBoard onAddBoard={handleAddBoard} />
        <div className="border-t-2 border-neutral-200 rounded-sm my-8" />
        <div className="grid grid-cols-4 gap-8">
          {boardsList.map((board) => (
            <Board key={board.id} board={board} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardsPage;
