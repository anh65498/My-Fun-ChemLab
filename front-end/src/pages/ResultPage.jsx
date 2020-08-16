import React, { Fragment } from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

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
  constructor(props) {
    super(props);
    this.state = { data: this.props.chemString, wolfram: this.props.chemString};
    console.log("Resulting Page");
    console.log(this.props.chemString);
  }
  
  // @alexandra_chirita added fetch method
   componentDidMount() {
    let self = this;
    let search = this.props.chemString;
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
          if (data_obj.results[i].Reactants === search || data_obj.results[i].Words_Name === search) {
            obj = data_obj.results[i];
            break;
          }
        }
        self.setState({
          data: obj,
        });
      })
      .then(function() {
        fetch(
          "http://techack.pythonanywhere.com/wolfram/" + search,
          {
            method: "GET",
            mode: 'cors'
          }
        )
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
          console.log(data);
          self.setState({
            wolfram: data,
          });
        });
      });

   
  }

  render() {
    const { classes } = this.props; // for styling

    if (this.state.data === null) {
      return  (<h3>404 - Not found</h3>);
    }

    let formula;
    //if (JSON.stringify(this.state.wolftam).includes("Internal Server Error")) {
    //  formula = this.props.chemString;
    //} else {
      formula = this.state.wolfram;
    //}

    return (
      <Fragment>
        <div id="background">
          <Grid container alignItems="center" className={classes.gridContainer}>
            <Grid item xs={3}>
              <iframe
               src={
                  "https://console.echoar.xyz/webar?key=dry-rain-8136&entry=" +
                  this.state.data.EchoAR_Link
                }
                allow="camera *"
              />
              <Typography variant="h5">{this.state.data.Reactant1}</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h1" display="inline">
                +
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <iframe
               src={
                  "https://console.echoar.xyz/webar?key=dry-rain-8136&entry=" +
                  this.state.data.EchoAR_Link2
                }
                allow="camera *"
              />
              <Typography variant="h5">{this.state.data.Reactant2}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h1" display="inline">
                =
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <iframe
               src={
                  "https://console.echoar.xyz/webar?key=dry-rain-8136&entry=" +
                  this.state.data.EchoAR_Link3
                }
                allow="camera *"
              />
              <Typography variant="h5">{this.state.data.Words_Result}</Typography>
            </Grid>
          </Grid>
          <Typography variant="h3" className={classes.fullReaction}>
            {formula}
          </Typography>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ResultPage);
