import useKeyboard from "../hooks/useKeyboard";

function TextInput() {
    const currentState = useKeyboard()

    return (
        <div>
            {currentState}
        </div>
    )
}

export default TextInput
