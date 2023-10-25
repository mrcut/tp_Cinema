import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FilmDetail = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/movies/${movieId})`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des films:", error)
      );
  }, [movieId]);

  if (!movie) return <Container>Ce film n'existe pas</Container>;
  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      direction="column"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Typography variant="h2" gutterBottom>
        {movie.title}
      </Typography>
      <img src={movie.poster} alt={movie.title} />
      <Typography variant="body1" paragraph>
        {movie.summary}
      </Typography>
      <Typography variant="body1">
        <strong>Director:</strong> {movie.director}
      </Typography>
      <Typography variant="body1">
        <strong>Actors:</strong> {movie.actors.join(", ")}
      </Typography>
    </Grid>
  );
};

export default FilmDetail;
