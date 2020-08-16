import React, { useState, Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import FrontPage from "./pages/FrontPage";
import ResultPage from "./pages/ResultPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chemString: "",
    };
    this.handleProps = this.handleProps.bind(this);
  }

  handleProps(chemString) {
    console.log("Entering handleProps");
    console.log(this.state.chemString);
    this.setState(() => ({ chemString }));
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <div>
              <Switch>
                <Route
                  exact={true}
                  path="/"
                  component={() => <FrontPage handleProps={this.handleProps} />}
                />
                <Route
                  exact={true}
                  path="/result"
                  component={() => (
                    <ResultPage chemString={this.state.chemString} />
                  )}
                />
                {/* <Route
                exact={true}
                path="/companies/:id"
                component={() => <CompanySpec />}
              /> */}
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
