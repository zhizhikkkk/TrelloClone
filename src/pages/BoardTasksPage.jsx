import { Navbar } from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useBoards } from "../hooks/BoardsProvider";

const BoardTasksPage = () => {
  const { boardId } = useParams();
  const { boardsList } = useBoards();

  const board = boardsList.find((b) => b.id === boardId);

  return (
    <div
      className="font-trello h-screen w-screen overflow-auto"
      style={{ backgroundColor: board.color }}
    >
      <Navbar />
      <div className="pt-24 pb-8 px-6 text-white bg-neutral-900 bg-opacity-50">
        {board.name}
      </div>
      <div className="py-24 px-6"></div>
    </div>
  );
};

export default BoardTasksPage;
