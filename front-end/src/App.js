import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { firebase } from './Services/firebase';

import styled from "styled-components";
import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Leaderboard from "./Pages/Leaderboard";
import SnippetsPage from "./Pages/SnippetsPage";
import LoginPage from "./Pages/LoginPage";
import TextInput from './Components/TextInput';
import TestPage from "./Pages/testPage";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--neongreen);

  h2 {
    font-size: calc(2rem + 2vw);
  }
`

const App = () => {
  const [ UserLoggedIn, setUserLoggedIn ] = useState(true);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return setUserLoggedIn(true)
    } else {
      setUserLoggedIn(false)
    }
  })

  if(UserLoggedIn === true) {
    return (
      <div className="App">
      <Sidebar />
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/test" component={TestPage} />
            <Route path="/code" component={SnippetsPage} />
          </Switch>
            <TextInput />
        </AnimatePresence>
      </Pages>
    </div>
    )
  } else {
    return (
      <Switch>
        <Route path="/" component={LoginPage} />
      </Switch>
    )
  }
};

export default App;
