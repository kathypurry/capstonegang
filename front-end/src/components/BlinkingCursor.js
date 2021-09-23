import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const CursorMovement = styled.div`
    position: relative;

`

function BlinkingCursor({ currentSnippet }) {
    let speed = 350;
    
    setInterval(() => {
        let cursor = true;
        if(cursor) {
            document.getElementsByClassName('cursor').style.opacity = 0;
            cursor = false;
        } else {
            document.getElementsByClassName('cursor').style.opacity = 1;
            cursor = true;
        }
    }, speed) 

    return (
        <div>
            <CursorMovement>
            <h2 className='cursor' style={{color: 'white'}}>|</h2>
            </CursorMovement>
        </div>
    );
};

export default BlinkingCursor;
