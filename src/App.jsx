import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import FilmDetail from "./components/Films/FilmDetail";
import FilmList from "./components/Films/FilmList";
import Footbar from "./components/Layout/Footbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<FilmList />} />
        <Route path="/movies/:movieId" element={<FilmDetail />} />
      </Routes>
      <Footbar />
    </BrowserRouter>
  );
}

export default App;
