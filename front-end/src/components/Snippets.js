import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import axios from "axios";

export default function Snippets() {
  const API = apiURL();

  const [snippet, setSnippet] = useState([]);

  useEffect(() => {
    axios.get(`${API}/code`).then((res) => {
      setSnippet(res.data);
    });
  }, []);

  return (

    <div>
      <h1>Snippets</h1>
      {console.log(snippet)}
      {snippet.map((snip) => snip.snippet)}
    </div>
  );
}
