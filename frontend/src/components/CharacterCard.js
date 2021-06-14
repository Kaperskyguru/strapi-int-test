import React from "react";
import {
  Typography,
  CssBaseline,
  Grid,
  Container,
  Card,
  Button,
  CardContent,
  Fab,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import useStyles from "../style";
import SideCardCharacter from "./SideCardCharacter";
import { useQuery, gql } from "@apollo/client";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const LIST_CHARACTERS = gql`
  query allPlanets {
    characters(page: 1, pageSize: 100) {
      id
      name
      description
      pictureUrl
      bornAt
      planet {
        name
        id
      }
    }
  }
`;

function CharacterCard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [selectedCharacter, setSelectedCharacter] = React.useState({});

  function handleSideCard(character) {
    setOpen(!open);
    setSelectedCharacter(character);
  }

  const { loading, error, data } = useQuery(LIST_CHARACTERS);

  if (loading) return <Loader />;
  if (error) return <p>An error has occured, please try again</p>;

  return (
    <>
      <CssBaseline />

      <Container>
        <Grid container spacing={4}>
          {data.characters.map((character) => (
            <Grid item key={character.id} xs={12} sm={6} md={3}>
              <Button
                className={classes.planetCardBtn}
                onClick={(e) => {
                  handleSideCard(character);
                }}
              >
                <Card className={classes.planetCard}>
                  <Grid item className={classes.planetCardImgContainerTwo}>
                    <img
                      src={character.pictureUrl}
                      alt="character avatar"
                      className={classes.planetCardImgTwo}
                    />
                  </Grid>
                  <CardContent className={classes.planetCardContent}>
                    <Typography
                      className={classes.planetCardHeading}
                      gutterBottom
                      variant="h5"
                    >
                      {character.name}
                    </Typography>
                    <Typography className={classes.planetCardText}>
                      Pop: {character.population || 0}
                    </Typography>
                  </CardContent>
                </Card>
              </Button>
            </Grid>
          ))}
          {open ? (
            <SideCardCharacter character={selectedCharacter} open={open} />
          ) : null}
        </Grid>
      </Container>

      <Link to="/characters/create">
        <Fab className={classes.modalBtn} aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </>
  );
}

export default CharacterCard;
