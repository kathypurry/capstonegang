import React from 'react'

function DisplaySnippets({snippet}) {
    return (
        <div>
            <br/>
            <h3>{snippet.snippet}</h3>
        </div>
    );
};

export default DisplaySnippets;
