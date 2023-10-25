import { Container, Grid } from "@mui/material";
import FilmCard from "./FilmCard";
import { useEffect, useState } from "react";

const FilmList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des films:", error)
      );
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <FilmCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FilmList;
