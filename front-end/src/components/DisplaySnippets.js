import React from 'react'

function DisplaySnippets({snippet}) {
    console.log(snippet.snippet)
    return (
        <div>
            <br/>

            <h3 style={{whiteSpace: 'pre-wrap'}}>{snippet.snippet}</h3>
        </div>
    );
};

export default DisplaySnippets;
