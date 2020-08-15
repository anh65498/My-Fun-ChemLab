import React, { Fragment } from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";

const styles = (theme) => ({
  gridContainer: {
    marginTop: "10vh",
  },
  fullReaction: {
    marginTop: "3vh",
  },
});

// @alexandra_chirita changed the name from const to class
class ResultPage extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  // @alexandra_chirita added function for database query

  render() {
    const { classes } = this.props; // for styling

    const axios = require("axios");
    async function makeRequest() {
      const config = {
        method: "get",
        url:
          "https://pg-app-hh3vkhgay7334zu3vh9917fdyhrsyw.scalabl.cloud/1/classes/Chemical_Reactions",
        headers: {
          "X-Parse-Application-Id": "DJONj9M6G3IBwGy3QvgjtOKD8ECR5DTQEKAQRKcz",
          "X-Parse-Rest-Api-Key": "BoxBHlH6rOD2Q2b3wJHBcLBxzATXN8QREEKpRTLc",
        },
      };
      let res = await axios(config);

      console.log(res.request._header);
    }
    try {
      makeRequest();
    } catch (err) {
      console.log("Error");
    }

    return (
      <Fragment>
        <div id="background">
          <Grid container alignItems="center" className={classes.gridContainer}>
            <Grid item xs={3}>
              <iframe
                src="https://console.echoar.xyz/webar?key=aged-poetry-0182&entry=f317da3d-5fc8-44c2-8af5-ff686db0c0e4"
                allow="camera *"
              />
              <Typography variant="h6">Methane</Typography>
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
              <Typography variant="h6">Hydrogen</Typography>
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
              <Typography variant="h6">Water</Typography>
            </Grid>
          </Grid>
          <Typography variant="h4" className={classes.fullReaction}>
            H2O + CO2 = H2CO3
          </Typography>
          <Typography> {this.state.data} </Typography>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ResultPage);
