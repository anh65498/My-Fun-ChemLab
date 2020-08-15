import React, { Fragment } from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: theme.spacing(12),
  },
}));

const ResultPage = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div id="background">
        <Grid container alignItems="center" className={classes.grid}>
          <Grid item xs={3}>
            <iframe
              src="https://console.echoar.xyz/webar?key=aged-poetry-0182&entry=f317da3d-5fc8-44c2-8af5-ff686db0c0e4"
              allow="camera *"
            />
            <Typography>Methane</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="h1" display="inline">
              +
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <iframe
              src="https://console.echoar.xyz/webar?key=aged-poetry-0182&entry=e612c1d3-bc72-49f7-b048-3a41888518ab"
              allow="camera *"
            />
            <Typography>Hydrogen</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h1" display="inline">
              =
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <iframe
              src="https://console.echoar.xyz/webar?key=aged-poetry-0182&entry=32952071-4354-4fe3-9db1-ef365081d222"
              allow="camera *"
            />
            <Typography>Water</Typography>
          </Grid>
        </Grid>
        <Typography>H2O + CO2 = H2CO3</Typography>
      </div>
    </Fragment>
  );
};

export default ResultPage;
