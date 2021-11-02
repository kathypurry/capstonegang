import React, { useEffect, useState } from 'react';
//https://betterprogramming.pub/create-a-typing-game-with-react-hooks-usekeypress-and-faker-28bbc7919820
const TextInput = (foo) => {
    const [pressed, setPressed] = useState();
    
    useEffect(() => {
        const hold = ({ compKey }) => {
            if (pressed !== compKey && compKey.length === 1) {
                setPressed(compKey);
                foo && foo(compKey);
            }
        };
    
        const release = () => {
            setPressed(null);
        }
    
        window.addEventListener('down', hold);  
        window.addEventListener('up', release);
    
        return () => {
            window.removeEventListener('down', hold);
            window.removeEventListener('up', release);
        }
    })
    return pressed;
};

export default TextInput;
