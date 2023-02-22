import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'service/films-service';

export function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    async function getReviews() {
      try {
        setLoading(true);
        const reviews = await fetchReviews(movieId);

        setReviews(reviews);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <>
      {error !== null && <p>{error}</p>}
      {loading && <p>Loader add</p>}
      <ul>
        {reviews?.length > 0 &&
          reviews.map(({ author, content }) => (
            <li>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
