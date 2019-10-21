import React, { useState } from "react";
import "./App.css";

//#region react-router
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
//#endregion

import NavigationBar from "./Components/Navbar";
import Raid from "./Components/Raid";
import Boss from "./Components/Boss";
import Home from "./Components/Home";

function App() {
  let [raid, setRaid] = useState("");
  let [boss, setBoss] = useState("");

  return (
    <div className='App'>
      <BrowserRouter>
        <NavigationBar
          raid={raid}
          boss={boss}
          setRaid={setRaid}
          setBoss={setBoss}
        />
        <Switch>
          <Route path='/:raid/:boss'>
            <Boss setBoss={setBoss} />
          </Route>
          <Route path='/:raid'>
            <Raid setRaid={setRaid} />
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
