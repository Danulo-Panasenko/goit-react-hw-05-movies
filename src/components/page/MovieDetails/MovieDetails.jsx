import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'shared/services/fetch-api';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    const fetchMovieDetails = async id => {
      try {
        const result = await fetchMovieById(id);
        setMovieInfo(result);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchMovieDetails();
  }, []);
  return (
    <>
      <h1>{movieInfo.title}</h1>
      <p>{movieInfo.popularity}</p>
      <p>{movieInfo.overview}</p>
    </>
  );
};

export default MovieDetails;
