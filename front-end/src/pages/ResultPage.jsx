import React, { Fragment } from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: theme.spacing(12),
  },
}));

// @alexandra_chirita changed the name from const to class
class ResultPage extends React.Component {
  constructor() {
    super();
    this.state = { data: {} };
  }

  componentDidMount() {
    let self = this;
    fetch(
      "https://pg-app-hh3vkhgay7334zu3vh9917fdyhrsyw.scalabl.cloud/1/classes/Chemical_Reactions",
      {
        method: "GET",
        headers: {
          "X-Parse-Application-Id": "DJONj9M6G3IBwGy3QvgjtOKD8ECR5DTQEKAQRKcz",
          "X-Parse-Rest-Api-Key": "BoxBHlH6rOD2Q2b3wJHBcLBxzATXN8QREEKpRTLc",
        },
      }
    )
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        var obj = null;
        var data_obj = JSON.parse(data);
        var count = Object.keys(data_obj.results).length;
        for (var i = 0; i < count; i++) {
          if (data_obj.results[i].Reactants == "CH4" || data_obj.results[i].Word_Name == "methan") {
            obj = data_obj.results[i];
            break;
          }
        }
        self.setState({
          data: obj,
        });
      });
  }

  render() {
    console.log("Result", this.state.data[0]);
    console.log(this.state.data);
    return (
      <Fragment>
        <div id="background">
          <Grid container alignItems="center">
            <Grid item xs={3}>
              <iframe
                src={
                  "https://console.echoar.xyz/webar?key=dry-rain-8136&entry=" +
                  this.state.data.EchoAR_Link
                }
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
                src={
                  "https://console.echoar.xyz/webar?key=aged-poetry-0182&entry=" +
                  this.state.data.EchoAR_Link2
                }
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
                src={
                  "https://console.echoar.xyz/webar?key=aged-poetry-0182&entry=" +
                  this.state.data.EchoAR_Link3
                }
                allow="camera *"
              />
            </Grid>
          </Grid>
          <Typography>H2O + CO2 = H2CO3</Typography>
          <Typography>{this.state.data.Words_Name + " " + this.state.data.Words_Result}</Typography>
        </div>
      </Fragment>
    );
  }
}

export default ResultPage;
