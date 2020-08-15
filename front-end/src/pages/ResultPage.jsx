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

  // @alexandra_chirita added function for database query 
  async componentDidMount(): Promise<void> {
    try {
      const response = await fetch('https://pg-app-hh3vkhgay7334zu3vh9917fdyhrsyw.scalabl.cloud/1/classes/Chemical_Reactions', {
        method:'GET',
        headers: {
          "X-Parse-Application-Id": "DJONj9M6G3IBwGy3QvgjtOKD8ECR5DTQEKAQRKcz",
          "X-Parse-Rest-Api-Key": "BoxBHlH6rOD2Q2b3wJHBcLBxzATXN8QREEKpRTLc"
        }
      })
  .then(function(response) {
      return response.text();
  })
  .then(function(data){
      var obj = null;
      var data_obj = JSON.parse(data);
      var count = Object.keys(data_obj.results).length;
      for (var i = 0; i < count; i++) {
        if (data_obj.results[i].Reactants == "H2O")
          {
            obj = data_obj.results[i];
            break;
          }
      }
      console.log([obj.EchoAR_Link, obj.EchoAR_Link2, obj.EchoAR_Link3]);

      return [obj.EchoAR_Link, obj.EchoAR_Link2, obj.EchoAR_Link3];
  })
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }

    await new Promise(resolve => { setTimeout(resolve, 10000); });
    this.state.data = response;
    return Promise.resolve();
}
  
  render() {
    return (
      <Fragment>
        <div id="background">
          <Grid container alignItems="center">
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
  }
  
};

export default ResultPage;
