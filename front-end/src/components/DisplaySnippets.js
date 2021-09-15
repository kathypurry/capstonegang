import React, { useEffect, useState } from 'react';
import TextInput from '../Components/TextInput';

function DisplaySnippets({snippet}) {
    
    return (
        <div>
            
            <br/>
            <br/>
            <br/>

            <h3 style={{whiteSpace: 'pre-wrap'}}>{snippet.snippet}</h3>
        </div>
    );
};

export default DisplaySnippets;
