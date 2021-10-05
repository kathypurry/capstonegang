import React, { useState, useRef, useEffect } from 'react';
import useTypingGame from 'react-typing-game-hook';
import styled from 'styled-components';

const WideInput = styled.div`
        width: 500px;
    `

const PlayerInput = ({ snippet }) => {
    //https://codesandbox.io/s/pensive-star-58xy6?file=/src/components/TypingInput.tsx
    const [duration, setDuration] = useState(0);
    const [typingInput, setTypingInput] = useState("");
    const [justTyped, setJustTyped] = useState("");
    const [ setTypeWrong] = useState(false);
    const [currWordPos, setCurrWordPos] = useState([-1, -1]);
    const inputRef = useRef(null);
  
    const {
        states: {
            currIndex,
            phase,
            correctChar,
            errorChar,
            startTime,
            endTime
        },
        actions: { insertTyping, resetTyping }
    } = useTypingGame(snippet, {
        skipCurrentWordOnSpace: true
    });
  
    useEffect(() => {
        for (let i = 0; i < typingInput.length; i++) {
            let char = typingInput[i];      
            let correctChar = snippet[currWordPos[0] + i];
            let diff = char !== correctChar;
            setJustTyped(char)
            
            if (diff) {
                break;
            }
        }
    }, [typingInput, currWordPos, snippet]);
  
    useEffect(() => {
        let tempCurrIndex =
            snippet[currIndex] === " "
                ? currIndex + 1
                : currIndex;
        
        let startIndex = snippet.lastIndexOf(" ", tempCurrIndex);
        startIndex =
            startIndex < 0
                ? 0
                : startIndex + 1;
        
        let endIndex = snippet.indexOf(" ", tempCurrIndex);
        endIndex =
            endIndex < 0
                ? snippet.length - 1
                : endIndex - 1;
  
        setCurrWordPos((oldcurrWordPos) => {
            if (startIndex !== oldcurrWordPos[0] || endIndex !== oldcurrWordPos[1]) {
                return [startIndex, endIndex];
            }
            return oldcurrWordPos;
        });
    }, [currIndex, snippet]);
  
    const reset = () => {
        resetTyping();
        setTypingInput("");
    };
  
    const submitWord = () => {
        for (let i = currWordPos[0]; i <= currWordPos[1]; i++) {
            let index = i - currIndex - 1;
            if (index > typingInput.length - 1) {
                insertTyping();
            } else {
                insertTyping(typingInput[index]);
            }
        }
        insertTyping(" ");
        setTypingInput("");
        setTypeWrong(false);
    };
  
    useEffect(() => {
        if (phase === 2 && endTime && startTime) {
            setDuration(Math.floor((endTime - startTime) / 1000));
            setCurrWordPos([-1, -1]);
        } else {
            setDuration(0);
        }
    }, [phase, startTime, endTime]);
  
    return (
        <div>
            <div
                onClick={() => {
                    inputRef.current.focus();
                }}
            >
                <div>
                    {snippet.split("").map((letter, index) => {
                        // let shouldHightlight =
                        //     index >= currWordPos[0] && index <= currWordPos[1];
                        // let state = charsState[index];
                        // let styling = "snippet-red-500";
                        // if (shouldHightlight) {
                        //     styling = "snippet-black bg-yellow-600";
                        // } else if (state === 0) {
                        //     styling = "snippet-gray-700";
                        // } else if (state === 1) {
                        //     styling = "snippet-gray-400";
                        // }
                        return (
                            <span key={letter + index}>
                                {letter}
                            </span>
                        );
                    })}
                </div>
                <WideInput>
                <div>
                    {/* {justTyped !== typingInput
                        ? <input
                        style={{ backgroundColor: "black", color: "neongreen" }}
                        type="snippet"
                        ref={inputRef}
                        style={{whiteSpace: 'pre-wrap'}}
                        onKeyDown={(e) => {
                            if (e.key === "Escape") {
                                e.preventDefault();
                                reset();
                            } else if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                submitWord();
                            }
                        }}
                        onChange={(e) => {
                            setTypingInput(e.target.value);
                        }}
                        value={typingInput}
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck={false}
                        // className={`focus:outline-none bg-black snippet-gray-400 border-b-2 p-1 w-full border-${!typingInput.length
                        //         ? "gray"
                        //         : typedWrong
                        //             ? "red" : "green"
                        //     }-500`}
                        placeholder={
                            phase !== 1
                                ? "Type here... (Press enter or space to submit word)"
                                : ""
                        }
                    />
                        : <input
                        style={{ backgroundColor: "black", color: "crimson" }}
                        type="snippet"
                        ref={inputRef}
                        onKeyDown={(e) => {
                            if (e.key === "Escape") {
                                e.preventDefault();
                                reset();
                            } else if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                submitWord();
                            }
                        }}
                        onChange={(e) => {
                            setTypingInput(e.target.value);
                        }}
                        value={typingInput}
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck={false}
                        // className={`focus:outline-none bg-black snippet-gray-400 border-b-2 p-1 w-full border-${!typingInput.length
                        //         ? "gray"
                        //         : typedWrong
                        //             ? "red" : "green"
                        //     }-500`}
                        placeholder={
                            phase !== 1
                                ? "Type here... (Press enter or space to submit word)"
                                : ""
                        }
                    />
                    } */}
                    
                        <input
                            style={justTyped === correctChar ? { backgrounColor: 'black', color: '#39ff14' } : {backgroundColor: 'black', color: '#39ff14'}}
                            type="snippet"
                            ref={inputRef}
                            onKeyDown={(e) => {
                                if (e.key === "Escape") {
                                    e.preventDefault();
                                    reset();
                                } else if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    submitWord();
                                }
                            }}
                            onChange={(e) => {
                                setTypingInput(e.target.value);
                            }}
                            value={typingInput}
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck={false}
                            // className={`focus:outline-none bg-black snippet-gray-400 border-b-2 p-1 w-full border-${!typingInput.length
                            //         ? "gray"
                            //         : typedWrong
                            //             ? "red" : "green"
                            //     }-500`}
                            placeholder={
                                phase !== 1
                                    ? "Type here... (Press enter or space to submit word)"
                                    : ""
                            }
                        />
                </div>
                    </WideInput>
            </div>
            <div>
                {phase === 2 && startTime && endTime
                ? (<>
                        <span>WPM: {Math.round(((60 / duration) * correctChar) / 5)}</span>
                        <br />
                        <span>Accuracy: {((correctChar / snippet.length) * 100).toFixed(2)}%</span>
                        <br />
                    <span>Duration: {duration}s</span>
                    </>)
                : null}
                
                <span className="mr-4"> Correct Characters: {correctChar}</span>
                <span className="mr-4"> Error Characters: {errorChar}</span>
            </div>
        </div>
    );
};

export default PlayerInput;