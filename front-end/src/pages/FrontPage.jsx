import React, { Fragment, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
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
}));

const inputProps = {
  color: "#000",
};

const FrontPage = () => {
  const classes = useStyles();
  let [chemString, setChemString] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setChemString(event.target.value);
    console.log(chemString);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // BackEnd might need to split by + and send "What's the color of " + element to Google for colors

    if (chemString !== "") {
      const data = {
        chemString, // role is a field in database
      };
      console.log(`Sending ${chemString}`);

      // axios
      //   .post("http://hegemon.ucsd.edu:/users/register", data)
      //   .then((response) => {
      //     console.log(response);
      //   });
    }
  };

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

            {/* <Box display="block"> */}

            <form
              className={classes.form}
              onSubmit={handleSubmit}
              noValidate
              autoComplete="off"
            >
              {/* <Container display="flex" justifyContent="center"> */}
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
                  onKeyUp={handleChange}
                  color="primary"
                />
              </Box>
              {/* </Box> */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                className={classes.submitButton}
              >
                Enter
              </Button>
              {/* </Container> */}
            </form>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default FrontPage;
