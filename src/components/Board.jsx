import { Link } from "react-router-dom";
import React, { useEffect } from "react";

const Board = ({ board }) => {
  return (
    <Link to={`/boards/${board.id}/tasks`}>
      <div
        className="text-white hover:scale-95 transition duration-300 px-14 py-14 rounded-lg cursor-pointer"
        style={{ backgroundColor: board.color }}
      >
        {board.name}
      </div>
    </Link>
  );
};

const withLogger = (Component) => {
  const WithLogger = (props) => {
    useEffect(() => {
      console.log(`Component ${Component.name} mounted.`);
      return () => {
        console.log(`Component ${Component.name} unmounted.`);
      };
    }, []);

    useEffect(() => {
      console.log(`Component ${Component.name} updated.`);
    });

    return <Component {...props} />;
  };

  WithLogger.displayName = `withLogger(${
    Component.displayName || Component.name
  })`;

  return WithLogger;
};

export default withLogger(Board);
