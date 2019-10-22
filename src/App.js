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
  return (
    <div className='App'>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route path='/:raid/:boss'>
            <Boss />
          </Route>
          <Route path='/:raid'>
            <Raid />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
