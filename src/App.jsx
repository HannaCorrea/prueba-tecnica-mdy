import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/header";
import CategoryPage from "./Pages/CategoryPage/categoryPage";
import DetailPage from "./Pages/DetailPage/detailPage";
import Home from "./Pages/Home/home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pelicula/:movieId" element={<DetailPage />} />
        <Route path="/genero/:genreId" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
