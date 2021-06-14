import React from "react";
import {
  Typography,
  CssBaseline,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import useStyles from "../style";
import character1 from "../characters/character-1.png";
import character2 from "../characters/character-2.png";
import character3 from "../characters/character-3.png";
import character4 from "../characters/character-4.png";
import character5 from "../characters/character-5.png";

function SideCard({ planet }) {
  const images = [character1, character2, character3, character4, character5];
  const classes = useStyles();
  const [close, setClose] = React.useState(true);

  return (
    <>
      <CssBaseline />
      {close ? (
        <Grid container>
          <Grid item>
            <Card className={classes.sideCard}>
              <Grid item className={classes.sideCardCloseBtnContainer}>
                <IconButton
                  className={classes.sideCardCloseBtn}
                  aria-label="close"
                  justify="flex-start"
                  onClick={() => setClose(false)}
                >
                  <CloseIcon className={classes.sideCardCloseBtnIcon} />
                </IconButton>
              </Grid>
              <CardContent className={classes.sideCardContent}>
                <Typography className={classes.sideContentHeading} variant="h4">
                  Planet {planet.name}
                </Typography>
                <Typography className={classes.sideContentDesc}>
                  {planet.description}
                </Typography>
                <Typography className={classes.sideContentStats}>
                  Population
                </Typography>
                <Typography className={classes.sideContentValue}>
                  200
                </Typography>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Typography
                    className={classes.sideContentSubHeading}
                    variant="h6"
                  >
                    Planet {planet.name}
                  </Typography>
                  <IconButton
                    className={classes.sideCardCloseBtn}
                    aria-label="add"
                    justify="flex-start"
                  >
                    <Link to="/planets/create">
                      <AddIcon className={classes.sideCardCloseBtnIcon} />
                    </Link>
                  </IconButton>
                </Grid>
                <Grid className={classes.sideCardScroll} container spacing={4}>
                  {images.map((image) => (
                    <Grid container direction="row" key={image}>
                      <Grid
                        item
                        xs={2}
                        className={classes.sideCardScrollImgContainer}
                      >
                        <img
                          src={image}
                          alt="avatar"
                          className={classes.sideCardScrollImg}
                        />
                      </Grid>
                      <Grid item xs={10} spacing={2}>
                        <Typography
                          className={classes.sideCardScrollHeading}
                          variant="h6"
                        >
                          Darlene Robertson
                        </Typography>
                        <Typography className={classes.sideCardScrollText}>
                          23 friends
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : null}
    </>
  );
}

export default SideCard;
