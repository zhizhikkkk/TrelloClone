import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MarketingPage from "./pages/MarketingPage";
import BoardsPage from "./pages/BoardsPage";
import BoardTasksPage from "./pages/BoardTasksPage";
import { BoardsProvider } from "./hooks/BoardsProvider";
import { LoginProvider } from "./hooks/LoginProvider";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LoginProvider />}>
          <Route path="/" element={<MarketingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<BoardsProvider />}>
            <Route path="/boards" element={<BoardsPage />} />
            <Route path="/boards/:boardId/tasks" element={<BoardTasksPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
