import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const Home = () => {
  return (
    <Box>
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Bienvenue sur CineWatch !
        </Typography>
        <Typography variant="h6" color="orange" align="center">
          Que voir au cinéma ? Quelle série regarder ?
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Top Films
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} sm={4} key={item}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`https://placeimg.com/600/400/movie/${item}`}
                    alt="film image"
                  />
                  <CardContent>
                    <Typography variant="h5" align="center" component="div">
                      Film Title {item}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      This is a short description of the film. Experience the
                      adventure, drama, and thrill of this amazing movie.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
