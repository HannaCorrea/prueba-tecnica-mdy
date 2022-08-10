import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/header";
import CategoryPage from "./Pages/CategoryPage/categoryPage";
import DetailPage from "./Pages/DetailPage/detailPage";
import Home from "./Pages/Home/home";
import SearchPage from "./Pages/SearchPage/searchPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pelicula/:movieId" element={<DetailPage />} />
        <Route path="/genero/:genreId" element={<CategoryPage />} />
        <Route path="/busqueda/:keyWord" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
