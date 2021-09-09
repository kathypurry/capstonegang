import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import DisplaySnippets from "./DisplaySnippets";

export default function Snippets() {
  const API = apiURL();

  //const [snippet, setSnippet] = useState([]);
  const [difficulty, setDifficulty] = useState([])
  const [currentLevel, setCurrentLevel] = useState([]);

  useEffect(() => {
    axios.get(`${API}/code`)
      .then((res) => {
      const filtered = filterSnippets(res.data) 
      setCurrentLevel(filterSnippets(res.data));
      console.log(res.data)
    });
  }, [difficulty]);

  const handleDifficultyChange = (e) => {
    setDifficulty({ [e.target.id]: Number(e.target.value) });
  };

  const filterSnippets = (data) => {
    return data.filter((snippet) => (Number(snippet.difficulty)) === difficulty)
  }

  return (
    <div>
      <h1>Snippets</h1>

      <label htmlFor='difficulty'>Pick your difficulty</label>
      <select id='difficulty' onClick={handleDifficultyChange}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </select>

      <h4>{currentLevel}</h4>
      {/* {snippet.map((snip) => snip.snippet)} */}
    </div>
  );
}
