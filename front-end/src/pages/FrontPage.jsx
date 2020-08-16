import React, { Fragment, useState } from "react";
import { withRouter, Link as RouterLink, Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";

const styles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    ".MuiFocus": {
      color: "#000",
    },
  },
  textField: {
    color: theme.palette.text.primary,
    marginBottom: "2vh",
  },
  container: {
    height: "100vh",
    maxHeight: "100vh",
  },
  title: {
    top: "-300px",
  },
  form: {
    marginTop: "5vh",
    width: "100%",
    color: "#000",
    display: "block",
  },
  submitButton: {
    padding: theme.spacing(2, 10),
  },
});

const inputProps = {
  color: "#000",
};

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chemString: "" };
  }

  handleChange = (event) => {
    event.preventDefault();
    const input = event.target.value;

    this.setState(() => ({
      chemString: input,
    }));
    console.log(this.state.chemString);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert("Submitting");

    // BackEnd might need to split by + and send "What's the color of " + element to Google for colors

    if (this.state.chemString !== "") {
      const data = {
        chemString: this.state.chemString, // role is a field in database
      };
      console.log(`Sending ${this.state.chemString}`);
      this.props.handleProps(this.state.chemString);
      this.props.history.push("/result");

      // axios
      //   .post("http://hegemon.ucsd.edu:/users/register", data)
      //   .then((response) => {
      //     console.log(response);
      //   });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Container maxWidth="md">
          <Grid
            container
            direction="row"
            alignItems="center"
            className={classes.container}
          >
            <Grid item xs={12}>
              <Typography
                display="block"
                variant="h2"
                gutterBottom
                align="center"
                className={classes.title}
              >
                MY FUN CHEM LAB
              </Typography>

              <form
                className={classes.form}
                onSubmit={this.handleSubmit}
                noValidate
                autoComplete="off"
              >
                <Box>
                  <TextField
                    id="inputString"
                    name="reactionString"
                    label="Reaction"
                    placeholder="Enter Your Reaction Here (E.g: Cu + H2SO4 -> ). Then click Enter"
                    variant="filled"
                    className={classes.textField}
                    inputProps={inputProps}
                    fullWidth
                    onChange={this.handleChange}
                    color="primary"
                  />
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.submitButton}
                  to="/result"
                >
                  Enter
                </Button>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(FrontPage));
