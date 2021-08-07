import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomeScreen from "./components/home/HomeScreen";
import LoginScreen from "./components/login/LoginScreen";

function App() {
  const user = "";

  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
