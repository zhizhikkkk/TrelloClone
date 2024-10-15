import { AddBoard } from "../components/AddBoard";
import { Navbar } from "../components/Navbar";
import { Board } from "../components/Board";
import { useBoards } from "../hooks/BoardsProvider";

const BoardsPage = () => {
  const { boardsList, handleAddBoard } = useBoards();

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
