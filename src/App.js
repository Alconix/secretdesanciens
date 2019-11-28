import React, { useState } from "react";
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

import "./firebase";

function App() {
  const [config, setConfig] = useState({
    dps: true,
    heal: true,
    tank: true,
    heroic: true,
    mythic: true,
  });

  const changeConfig = (name, value) => {
    setConfig(prevConfig => ({ ...prevConfig, [name]: value }));
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <NavigationBar config={config} changeConfig={changeConfig} />
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
            <Boss config={config} />
          </Route>
          <Route path='/strats/:raid'>
            <Raid />
          </Route>
          <Route exact path='/strats'>
            <Strats />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
