import React from "react";
import { Grid } from "@material-ui/core";
import planetLoader from "../assets/planet-loader.svg";
import useStyles from "../style";

const Loader = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center" align="center" spacing={4}>
        <Grid
          item
          spacing={2}
          xs={12}
          sm={6}
          md={4}
          lg={2}
          className={classes.loader}
        >
          <img src={planetLoader} alt="planet loader" />
        </Grid>
      </Grid>
    </>
  );
};

export default Loader;
