import NavMenu from './components/NavMenu/NavMenu';
import { Routes, Route } from 'react-router-dom';
import Home from './components/page/Home/Home';
import MovieDetails from './components/page/MovieDetails/MovieDetails';
import Movies from './components/page/Movies/Movies';
import NotFoundPage from './components/page/NotFoundPage/NotFoundPage';
export const App = () => {
  return (
    <>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
