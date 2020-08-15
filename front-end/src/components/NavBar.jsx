import React from "react";
import { withRouter, Link as RouterLink } from "react-router-dom";
import {
  makeStyles,
  AppBar,
  IconButton,
  CssBaseline,
  Toolbar,
  Typography,
  Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary.light,
  },
  toolbar: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const NavBar = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton>
            <Typography>
              <Link
                color="textSecondary"
                variant="h5"
                component={RouterLink}
                to="/"
                underline="none"
              >
                My Fun ChemLab
              </Link>
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default withRouter(NavBar);
