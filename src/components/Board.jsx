export const Board = ({ board }) => {
  return (
    <div
      className="text-white hover:scale-95 transition duration-300 px-14 py-14 rounded-lg cursor-pointer"
      style={{ backgroundColor: board.color }}
    >
      {board.name}
    </div>
  );
};
