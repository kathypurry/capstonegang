import { useState, useEffect, useRef } from "react";
import { apiURL } from "../util/apiURL";
import axios from "axios";

import styled from 'styled-components';

import DisplaySnippets from "./DisplaySnippets";
import useKeyboard from "../hooks/useKeyboard";
// import { KeyframeTrack } from "three";

const SnippetContainer = styled.div`
  display: flex;

  margin-left: 15vw;
  z-index: -1;
`

const Editor = ({currentSnippet}) => {
  const keyInput = useKeyboard();
  const [ completedSnippet, setCompletedSnippet ] = useState({});
  const snippetLength = currentSnippet.snippet?.length;

  // completedSnippet once user has finished typing the snippet
  // set a start and a end point
  // setCompletedSnippet maybe set it to check with a boolean

  return (
    <div>
        <SnippetContainer>
          {/* <BlinkingCursor currentSnippet={currentSnippet} /> */}
          <h2 style={{whiteSpace: 'pre-wrap'}} >{currentSnippet?.snippet}</h2> 
        </SnippetContainer>
        {/* <DisplaySnippets snippet={currentSnippet}/> */}
          <input type='text' style={{whiteSpace: 'pre-wrap'}} value={keyInput}></input>
    </div>
  );
};

export default Editor;