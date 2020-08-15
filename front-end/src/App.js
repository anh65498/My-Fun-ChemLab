import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import FrontPage from "./pages/FrontPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <div>
            <Switch>
              <Route exact={true} path="/" component={FrontPage} />
              <Route exact={true} path="/result" component={ResultPage} />
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

export default App;
