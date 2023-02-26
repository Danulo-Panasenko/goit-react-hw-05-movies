import NavMenu from './components/NavMenu/NavMenu';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'shared/Loader/Loader';
const Home = lazy(() => import('./components/page/Home/Home'));
const MovieCast = lazy(() => import('./components/Cast/Cast'));
const MovieRewiewers = lazy(() =>
  import('components/MovieRewiewers/MovieRewiers')
);
const MovieDetails = lazy(() =>
  import('./components/page/MovieDetails/MovieDetails')
);
const Movies = lazy(() => import('./components/page/Movies/Movies'));
const NotFoundPage = lazy(() =>
  import('./components/page/NotFoundPage/NotFoundPage')
);

export const App = () => {
  return (
    <>
      <NavMenu />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieRewiewers />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
