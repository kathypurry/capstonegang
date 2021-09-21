import useKeyboard from "../hooks/useKeyboard";

function TextInput() {
    const keyInputHook = useKeyboard()

    return keyInputHook;
};

export default TextInput;
