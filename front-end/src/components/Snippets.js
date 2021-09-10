import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import axios from "axios";

import styled from 'styled-components';

import DisplaySnippets from "./DisplaySnippets";

const LabelHousing = styled.div`
  margin-left: 15vw;
  margin-bottom: 5vh;
`

const SnippetContainer = styled.div`
  display: flex;

  margin-left: 15vw;
  z-index: -1;
`

const PopulateSnippets = styled.ul`
  list-style: none;
`

export default function Snippets() {
  const API = apiURL();

  const [snippet, setSnippet] = useState([]);
  const [difficulty, setDifficulty] = useState([]);

  useEffect(() => {
    axios.get(`${API}/code`)
      .then(
        (res) => setSnippet(res.data),
        (error) => console.log('get', error)
      )
      .catch((c) => console.warn('catch', c));
  }, []);
 
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const filteredSnippet = snippet.filter(snip => snip.difficulty === difficulty)

  return (
    <div>
      <LabelHousing>
      <label htmlFor='difficulty'>Pick your difficulty</label>
          <select 
            id='difficulty' 
            onChange={handleDifficultyChange} 
            value={difficulty}
          >
            <option>-Choose difficulty-</option>
            <option value='1' defaultChecked>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
        </LabelHousing>
        <SnippetContainer>
        <PopulateSnippets>
          {filteredSnippet.map(snip => {
            return (
              <li key={snip.id}>
                <DisplaySnippets snippet={snip}/>
              </li>
            )
          })}
        </PopulateSnippets>
      </SnippetContainer>
    </div>
  );
};
