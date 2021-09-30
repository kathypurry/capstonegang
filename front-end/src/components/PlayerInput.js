import React, { useState, useRef, useEffect } from 'react';
import useTypingGame from 'react-typing-game-hook';

const PlayerInput = ({ snippet }) => {
    //https://codesandbox.io/s/pensive-star-58xy6?file=/src/components/TypingInput.tsx
    const [duration, setDuration] = useState(0);
    const [typingInput, setTypingInput] = useState("");
    const [typedWrong, setTypeWrong] = useState(false);
    const [currWordPos, setCurrWordPos] = useState([-1, -1]);
    const inputRef = useRef(null);
  
    const {
        states: {
            charsState,
            currIndex,
            phase,
            correctChar,
            errorChar,
            startTime,
            endTime
        },
        actions: { insertTyping, resetTyping }
    } = useTypingGame(snippet, {
        //skip current word when spacebar is triggered 
        //false -> move to next letter instead
        skipCurrentWordOnSpace: true
    });
  
    //checks whether the word is correct while the user is typing
    useEffect(() => {
        console.log(snippet)
        let hasError = false;
        for (let i = 0; i < typingInput.length; i++) {
            let char = typingInput[i];
            let correctChar = snippet[currWordPos[0] + i];
            let diff = char !== correctChar;
            console.log(diff)
            if (diff) {
                hasError = true;
                //break out of for loop 
                break;
            }
        }
        // if (hasError !== prev) {
        //     return !prev;
        // } else {
        //     return prev;
        // }
    }, [typingInput, currWordPos, snippet]);
  
    //Set the start and end index of the next word
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
  
    //Reset
    const reset = () => {
        resetTyping();
        setTypingInput("");
    };
  
    //Submit inputted word
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
  
    //set WPM
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
                        let shouldHightlight =
                            index >= currWordPos[0] && index <= currWordPos[1];
                        let state = charsState[index];
                        let styling = "snippet-red-500";
                        if (shouldHightlight) {
                            styling = "snippet-black bg-yellow-600";
                        } else if (state === 0) {
                            styling = "snippet-gray-700";
                        } else if (state === 1) {
                            styling = "snippet-gray-400";
                        }
                        return (
                            <span key={letter + index} className={`${styling}`}>
                                {letter}
                            </span>
                        );
                    })}
                </div>
                <div className="mb-2">
                    <input
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
                        className={`focus:outline-none bg-black snippet-gray-400 border-b-2 p-1 w-full border-${!typingInput.length
                                ? "gray"
                                : typedWrong
                                    ? "red" : "green"
                            }-500`}
                        placeholder={
                            phase !== 1
                                ? "Type here... (Press enter or space to submit word)"
                                : ""
                        }
                    />
                </div>
            </div>
            <p className="snippet-sm">
                {phase === 2 && startTime && endTime ? (
                    <>
                        <span className="snippet-green-500 mr-4">
                            WPM: {Math.round(((60 / duration) * correctChar) / 5)}
                        </span>
                        <span className="snippet-blue-500 mr-4">
                            Accuracy: {((correctChar / snippet.length) * 100).toFixed(2)}%
                        </span>
                        <span className="snippet-yellow-500 mr-4">Duration: {duration}s</span>
                    </>
                ) : null}
                <span className="mr-4"> Current Index: {currIndex}</span>
                <span className="mr-4"> Correct Characters: {correctChar}</span>
                <span className="mr-4"> Error Characters: {errorChar}</span>
            </p>
        </div>
    );
};

export default PlayerInput;