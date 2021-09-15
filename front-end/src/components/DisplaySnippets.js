import React, { useEffect, useState } from 'react';
import TextInput from '../Components/TextInput';

function DisplaySnippets({ snippet }) {
    // const [input, setInput] = useState("");
    // const [workingSnippet, setWorkingSnippet] = useState([]);

    // const oneSnippet = snippet.map(snip => {setWorkingSnippet(...snip.snippet)})
    const handle_inputChange = (e) => {
        setInput(e.target.value)
    }

    return ( 
        <div>
            
            <br/>
            <br/>
            <br/>
            <h3>{snippet.snippet}</h3>
            <input type="text" name="" id="" onChange={handle_inputChange} />
            //compare input var to snippet var
        </div>
    );
};

export default DisplaySnippets;
