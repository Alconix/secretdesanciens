import React, { useEffect } from "react";
import SnowStorm from "react-snowstorm";
import firebase from "firebase";
import "./App.css";

//#region react-router
import { BrowserRouter, Switch, Route } from "react-router-dom";
//#endregion

import NavigationBar from "./Components/Navbar";
import Progress from "./Components/Progress";
import Raid from "./Components/Raid";
import Boss from "./Components/Boss";
import Strats from "./Components/Strats";
import Login from "./Components/Login";
import User from "./Components/User";
import Apply from "./Components/Apply";
import ApplyList from "./Components/ApplyList";
import ApplyCreator from "./Components/ApplyCreator";
import Home from "./Components/Home";

import "./firebase";

function App() {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem("authUser", JSON.stringify(user));
      } else {
        localStorage.removeItem("authUser");
      }
    });
  }, []);

  return (
    <div className='App'>
      <SnowStorm snowStick={false} />
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route path='/progress'>
            <Progress />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/candidatures'>
            <ApplyList />
          </Route>
          <Route exact path='/candidatures/create'>
            <ApplyCreator />
          </Route>
          <Route path='/candidatures/:apply_id'>
            <Apply />
          </Route>
          <Route path='/users/:user_id'>
            <User />
          </Route>
          <Route path='/strats/:raid/:boss'>
            <Boss />
          </Route>
          <Route path='/strats/:raid'>
            <Raid />
          </Route>
          <Route exact path='/strats'>
            <Strats />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
