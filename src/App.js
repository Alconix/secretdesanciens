import React, { useState, useEffect } from "react";
import "./App.css";
import firebase from "firebase";

//#region react-router
import { BrowserRouter, Switch, Route } from "react-router-dom";
//#endregion

import NavigationBar from "./Components/Navbar";
import Progress from "./Components/Progress";
import Raid from "./Components/Raid";
import Boss from "./Components/Boss";
import Home from "./Components/Home";
import Login from "./Components/Login";
import User from "./Components/User";
import Apply from "./Components/Apply";
import ApplyList from "./Components/ApplyList";
import ApplyCreator from "./Components/ApplyCreator";

import "./firebase";

function App() {
  const [config, setConfig] = useState({
    dps: true,
    heal: true,
    tank: true,
    heroic: true,
    mythic: true,
  });

  const [user, setUser] = useState();

  const changeConfig = (name, value) => {
    setConfig(prevConfig => ({ ...prevConfig, [name]: value }));
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      }
      console.log(user);
    });
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <NavigationBar
          config={config}
          changeConfig={changeConfig}
          user={user}
        />
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
            <Apply user={user} />
          </Route>
          <Route path='/users/:user_id'>
            <User />
          </Route>
          <Route path='/:raid/:boss'>
            <Boss config={config} />
          </Route>
          <Route path='/:raid'>
            <Raid />
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
