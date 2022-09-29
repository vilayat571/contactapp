import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components";
import Single from "./components/Single";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home/:id" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;