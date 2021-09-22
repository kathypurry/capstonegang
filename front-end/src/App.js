import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { firebase } from './Services/firebase';

import styled from "styled-components";
import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Leaderboard from "./Pages/Leaderboard";
import GamePage from './Pages/GamePage';
import LoginPage from "./Pages/LoginPage";
import TestPage from "./Pages/testPage";
import Game_StoryMode from './Pages/Game_StoryMode';
import Game_PracticeMode from './Pages/Game_PracticeMode';
import User_StatPage from './Pages/User_StatPage';

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
            <Route exact path="/" component={GamePage} />
            <Route path="/about" component={About} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/story" component={Game_StoryMode} />
            <Route path="/practice" component={Game_PracticeMode} />
            <Route path="/user/career" component={Leaderboard} />
            <Route path="/user/career" component={User_StatPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/test" component={TestPage} />
          </Switch>
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
