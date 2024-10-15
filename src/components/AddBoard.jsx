import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import { Button } from "./Button";
import { Plus } from "lucide-react";

export const AddBoard = ({ onAddBoard }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [newBoardTitle, setNewBoardTitle] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNewBoardTitleChange = (event) => {
    setNewBoardTitle(event.target.value);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddBoard = () => {
    onAddBoard(newBoardTitle);
    setNewBoardTitle("");
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div
        className="border bg-white hover:bg-neutral-200 transition duration-300 px-8 py-8 rounded-lg inline-block cursor-pointer"
        onClick={handleClick}
      >
        Create new board
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        <div className="font-trello p-4">
          <div className="mb-2">New board title</div>
          <div className="flex">
            <input
              type="text"
              className="py-1 px-3 rounded-sm border mr-2"
              onChange={handleNewBoardTitleChange}
            ></input>
            <Button onClick={handleAddBoard}>
              <Plus></Plus>
            </Button>
          </div>
        </div>
      </Popover>
    </>
  );
};
