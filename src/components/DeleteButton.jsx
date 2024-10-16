import React from "react";

const DeleteButton = ({ onDelete }) => {
  return (
    <button
      onClick={onDelete}
      className="delete-button bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-200 transform hover:scale-105"
      title="Удалить доску"
    >
      Удалить
    </button>
  );
};

export default DeleteButton;
