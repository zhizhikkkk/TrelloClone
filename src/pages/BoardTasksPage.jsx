import { Navbar } from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { useBoards } from "../hooks/BoardsProvider";
import { useState } from "react";
import { Button } from "../components/Button";
import TaskList from "../components/TaskList"; // Импортируем TaskList

const BoardTasksPage = () => {
  const { boardId } = useParams();
  const { boardsList } = useBoards();
  const navigate = useNavigate();
  const board = boardsList.find((b) => b.id === boardId);

  const [columns, setColumns] = useState([]);
  const [newColumnTitle, setNewColumnTitle] = useState("");

  const handleAddColumn = () => {
    if (newColumnTitle.trim()) {
      setColumns((prev) => [
        ...prev,
        { id: Date.now(), title: newColumnTitle, tasks: [] },
      ]);
      setNewColumnTitle("");
    }
  };

  const handleAddTask = (columnId, newTaskTitle) => {
    setColumns((prev) =>
      prev.map((column) =>
        column.id === columnId
          ? {
              ...column,
              tasks: [...column.tasks, { id: Date.now(), title: newTaskTitle }],
            }
          : column
      )
    );
  };

  const handleDeleteColumn = (id) => {
    setColumns((prev) => prev.filter((column) => column.id !== id));
  };

  const handleCopyColumn = (column) => {
    setColumns((prev) => [
      ...prev,
      { id: Date.now(), title: column.title, tasks: [...column.tasks] },
    ]);
  };

  const handleEditColumn = (id, newTitle) => {
    setColumns((prev) =>
      prev.map((column) =>
        column.id === id ? { ...column, title: newTitle } : column
      )
    );
  };

  const handleTaskInputVisibleChange = (columnId, isVisible, setVisibility) => {
    setVisibility(!isVisible);
  };

  return (
    <div
      className="font-trello h-screen w-screen overflow-auto"
      style={{ backgroundColor: board.color }}
    >
      <Navbar />
      <div className="pt-24 pb-8 px-6 text-white bg-neutral-900 bg-opacity-50">
        <Button onClick={() => navigate("/boards")}>Назад к доскам</Button>
        <h1 className="text-2xl">{board.name}</h1>
      </div>
      <div className="py-24 px-6 flex">
        {columns.map((column) => (
          <TaskList
            key={column.id}
            column={column}
            onDeleteColumn={handleDeleteColumn}
            onCopyColumn={handleCopyColumn}
            onEditColumn={handleEditColumn}
            onAddTask={handleAddTask}
            onTaskInputVisibleChange={handleTaskInputVisibleChange}
          />
        ))}
        <div className="bg-gray-200 rounded-lg p-4 m-2 w-1/4">
          <input
            type="text"
            value={newColumnTitle}
            onChange={(e) => setNewColumnTitle(e.target.value)}
            placeholder="Добавьте колонку"
            className="border rounded p-1 w-full"
          />
          <Button onClick={handleAddColumn}>Добавить колонку</Button>
        </div>
      </div>
    </div>
  );
};

export default BoardTasksPage;
