import React, { useEffect, useState } from 'react';

function DisplaySnippets({snippet}) {
    const [input, setInput] = useState('')
    const [workingSnippet, setWorkingSnippet] = useState('')

    const allSnippets = snippet.map((oneSnippet) => oneSnippet.snippet)
    useEffect(() => {
        console.log(allSnippets)
    })
    const handle_userInput = (e) => {
        setInput(e.target.value)
    }
    return (
        <div>
            <br/>
            <br/>
            <br />
            <h3 style={{ whiteSpace: 'pre-wrap' }}>{allSnippets}</h3>
            <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                onChange={handle_userInput} />
        </div>
    );
};

export default DisplaySnippets;
