import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<News category="general" />} />
          <Route
            path="/entertainment"
            element={<News category="entertainment" />}
          />
          <Route path="/sports" element={<News category="sports" />} />
          <Route path="/business" element={<News category="business" />} />
          <Route path="/science" element={<News category="science" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
