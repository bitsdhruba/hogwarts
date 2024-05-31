import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Books from "./pages/Books";
import Spells from "./pages/Spells";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/books" element={<Books />} />
        <Route path="/spells" element={<Spells />} />
      </Routes>
    </>
  );
}

export default App;
