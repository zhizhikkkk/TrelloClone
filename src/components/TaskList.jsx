import { useState } from "react";
import { Button } from "./Button";

const TaskList = ({
  column,
  onDeleteColumn,
  onCopyColumn,
  onEditColumn,
  onAddTask,
}) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [taskInputVisible, setTaskInputVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedColumnTitle, setEditedColumnTitle] = useState(column.title);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      onAddTask(column.id, newTaskTitle);
      setNewTaskTitle("");
      setTaskInputVisible(false);
    }
  };

  const handleEditColumn = () => {
    setIsEditing(true);
    setTaskInputVisible(false);
  };

  const handleSaveEditedColumn = () => {
    onEditColumn(column.id, editedColumnTitle);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedColumnTitle(column.title);
  };

  return (
    <div className="bg-gray-200 rounded-lg p-4 m-2 w-1/4 relative transition duration-200 transform hover:scale-105">
      <div className="flex justify-between">
        {isEditing ? (
          <input
            type="text"
            value={editedColumnTitle}
            onChange={(e) => setEditedColumnTitle(e.target.value)}
            className="border rounded p-1 w-3/4"
          />
        ) : (
          <h2 className="font-bold">{column.title}</h2>
        )}
        <button
          onClick={() => setMenuVisible(!menuVisible)}
          className="text-gray-500 hover:text-gray-700 transition duration-200"
        >
          ⋮
        </button>
      </div>

      {/* Меню действий */}
      {menuVisible && (
        <div className="absolute right-2 top-8 bg-white shadow-md p-2 rounded-md space-y-2 flex flex-col w-40">
          {isEditing ? (
            <>
              <Button onClick={handleSaveEditedColumn} className="mb-2">
                Сохранить
              </Button>
              <Button onClick={handleCancelEdit}>Отмена</Button>
            </>
          ) : (
            <>
              {/* Ограничение ширины и перенос слов */}
              <Button
                onClick={handleEditColumn}
                className="mb-2 text-left break-words max-w-full"
                title="Переименовать"
              >
                Переименовать
              </Button>
              <Button
                onClick={() => onDeleteColumn(column.id)}
                className="mb-2 text-left break-words max-w-full"
                title="Удалить"
              >
                Удалить
              </Button>
              <Button
                onClick={() => onCopyColumn(column)}
                className="text-left break-words max-w-full"
                title="Копировать"
              >
                Копировать
              </Button>
            </>
          )}
        </div>
      )}

      <div>
        {column.tasks.map((task) => (
          <div key={task.id} className="bg-white p-2 rounded mt-2">
            {task.title}
          </div>
        ))}

        {taskInputVisible ? (
          <>
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="Добавьте задачу"
              className="border rounded p-1 w-full mt-2"
            />
            <Button onClick={handleAddTask}>Добавить карточку</Button>
          </>
        ) : (
          !isEditing && (
            <Button onClick={() => setTaskInputVisible(true)}>
              Добавить карточку
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default TaskList;
