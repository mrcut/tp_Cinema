import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function FilmCard({ movie }) {
  return (
    <Box sx={{ maxWidth: 345, margin: "auto" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea component={Link} to={`/movies/${movie.id}`}>
          <Box sx={{ paddingTop: "150%", position: "relative" }}>
            <CardMedia
              component="img"
              alt={movie.title}
              sx={{
                position: "absolute",
                top: 0,
                width: "100%",
                height: "100%",
                textAlign: "center",
              }}
              image={movie.poster}
              title={movie.title}
            />
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {movie.summary}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default FilmCard;
