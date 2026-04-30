import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress}  category="general" />} />
          <Route
            path="/entertainment"
            element={<News setProgress={setProgress}  category="entertainment" />}
          />
          <Route path="/sports" element={<News setProgress={setProgress}  category="sports" />} />
          <Route path="/business" element={<News setProgress={setProgress}  category="business" />} />
          <Route path="/science" element={<News setProgress={setProgress}  category="science" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
