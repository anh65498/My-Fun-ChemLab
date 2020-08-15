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
              src="https://console.echoar.xyz/webar?key=aged-poetry-0182&entry=eb6fee18-08ff-412a-a27e-575cf66ba1b1"
              allow="camera *"
            />
          </Grid>
          <Grid item xs={1}>
            <Typography variant="h1" display="inline">
              +
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <iframe
              src="https://console.echoar.xyz/webar?key=aged-poetry-0182&entry=cde64334-4e36-43e2-bc88-e6c96c312dc7"
              allow="camera *"
            />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h1" display="inline">
              =
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <iframe
              src="https://console.echoar.xyz/webar?key=aged-poetry-0182&entry=cde64334-4e36-43e2-bc88-e6c96c312dc7"
              allow="camera *"
            />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default ResultPage;
