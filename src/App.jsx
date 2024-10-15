import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import MarketingPage from "./pages/MarketingPage";
import BoardsPage from "./pages/BoardsPage";
import BoardTasksPage from "./pages/BoardTasksPage";
import { BoardsProvider } from "./hooks/BoardsProvider";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketingPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route element={<BoardsProvider />}>
          <Route path="/boards" element={<BoardsPage />} />
          <Route path="/boards/:boardId/tasks" element={<BoardTasksPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
