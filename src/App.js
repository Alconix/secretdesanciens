import React, { useState } from "react";
import "./App.css";

//#region react-router
import { BrowserRouter, Switch, Route } from "react-router-dom";
//#endregion

import NavigationBar from "./Components/Navbar";
import Raid from "./Components/Raid";
import Boss from "./Components/Boss";
import Home from "./Components/Home";

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
          <Route path='/:raid/:boss'>
            <Boss />
          </Route>
          <Route path='/:raid'>
            <Raid />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
