import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { Alert } from "./components/layout/alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./components/pages/about";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import { Home } from "./components/pages/home";
import { NotFound } from "./components/pages/NotFound";

const App = () => {
  // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   alert: null
  // };
  // const setUsers = async () => {
  //   setLoading(false);
  //   const response = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   setLoading(false);
  //   setUsers(response.data);
  // };

  return (
    <GithubState>
      <AlertState>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </AlertState>
    </GithubState>
  );
};
export default App;
