import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import axios from "axios";

import styled from 'styled-components';

import BlinkingCursor from "./BlinkingCursor";
import useKeyboard from "../hooks/useKeyboard";
import { KeyframeTrack } from "three";

const SnippetContainer = styled.div`
  display: flex;

  margin-left: 15vw;
  z-index: -1;
`

const Editor = ({currentSnippet}) => {
  const keyInput = useKeyboard();
  const [ completedSnippet, setCompletedSnippet ] = useState({});
  const snippetLength = currentSnippet.snippet?.length;
  console.log(snippetLength)

  return (
    <div>
        <SnippetContainer>
          <p style={{whiteSpace: 'pre-wrap'}}>{keyInput}</p>
          <BlinkingCursor currentSnippet={currentSnippet} />
          <h3 style={{whiteSpace: 'pre-wrap'}}>{currentSnippet?.snippet}</h3> 
        </SnippetContainer>
    </div>
  );
};

export default Editor;