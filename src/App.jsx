import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import MarketingPage from "./pages/MarketingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketingPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </Router>
  );
};

export default App;
