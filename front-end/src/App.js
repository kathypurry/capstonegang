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
import Game_StoryMode from './Pages/GAME_STORY_MODE';
// import Game_PracticeMode from './Pages/Game_PracticeMode';
import User_StatPage from './Pages/User_StatPage';

import 'bootstrap/dist/css/bootstrap.min.css';

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--neongreen);
  background-color: var(--background);
  font-family: 'Josefin Sans', sans-serif;

  h2 {
    font-size: calc(2rem + 2vw);
  }

  .btn-custom {
    border-color: var(--neongreen);
    color: var(--neongreen);
    width: 130px;
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
              <Route path="/story" component={Game_StoryMode} />
              <Route path="/game" component={GamePage} />
            <Route path="/practice" component={GamePage} />
            <Route path="/career" component={User_StatPage} />
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
