import React from "react";
import {
  Typography,
  CssBaseline,
  Grid,
  Container,
  Fab,
  Card,
  Button,
  CardContent,
} from "@material-ui/core";
import { useQuery, gql } from "@apollo/client";
import SideCardPlanet from "./SideCardPlanet";
import useStyles from "../style";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

const LIST_PLANETS = gql`
  query allPlanets {
    planets(page: 1) {
      id
      name
      description
      code
      pictureUrl
      characters {
        name
        id
      }
    }
  }
`;

function PlanetCard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedPlanet, setSelectedPlanet] = React.useState({});

  const { loading, error, data } = useQuery(LIST_PLANETS);

  if (loading) return <Loader />;
  if (error) return <p>An error has occured, please try again</p>;

  function handleSideCard(planet) {
    setOpen(!open);
    setSelectedPlanet(planet);
  }

  return (
    <>
      <CssBaseline />
      {open ? <SideCardPlanet planet={selectedPlanet} /> : null}
      <Container>
        <Grid container spacing={4}>
          {!loading &&
            data.planets.map((planet) => (
              <Grid item xs={12} sm={6} md={3} key={planet.id}>
                <Button
                  className={classes.planetCardBtn}
                  onClick={() => {
                    handleSideCard(planet);
                  }}
                >
                  <Card className={classes.planetCard}>
                    <Grid item className={classes.planetCardImgContainer}>
                      <img
                        src={planet.pictureUrl}
                        alt="planet avatar"
                        className={classes.planetCardImg}
                      />
                    </Grid>
                    <CardContent className={classes.planetCardContent}>
                      <Typography
                        className={classes.planetCardHeading}
                        gutterBottom
                        variant="h5"
                      >
                        {planet.name}
                      </Typography>
                      <Typography className={classes.planetCardText}>
                        0
                      </Typography>
                    </CardContent>
                  </Card>
                </Button>
              </Grid>
            ))}
        </Grid>
      </Container>

      <Link to="/planets/create">
        <Fab className={classes.modalBtn} aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </>
  );
}

export default PlanetCard;
