\c production_database_name;

INSERT INTO users (
    username, email, password
) VALUES
('KATHYISCOOL', 'Kathy@pursuit.org', 'issapassword'),
('CANDYISCOOL', 'CANDY@pursuit.org', 'issapassowrdlol233456');

INSERT INTO code_snippets (
    difficulty, snippet
) VALUES
(1, 'Hello World! Math.random() library ECMAScript 6'),
(1, 'console.log("Hi there!") let amount = 6;'),
(1, 'let message = "good nite" console.log(message.length)'),
(1, 'let price = $4.99 const lateToWork = true;'),
(1, 'let double = "Wheres my bandit hat?" 10 % 5'),
(1, 'let baseUrl = "localhost/taxwebapp/country"; number += 10'),
(1, '"A year has " + weeksInYear + " weeks and " + daysLeftOver + " days"'),
(1, '`Tommy is ${age} years old.` const currency = "$"'),
(1, 'console.log(`Billy is ${6+8} years old.`) epic = true'),
(1, 'const multiply = (a,b) => a * b;'),
(1, 'console.log(`this is ${string} interpolation`)'),
(1, 'Math.random(Math.floor(randomNum)))'),
(1, 'let arr = []'),
(1, 'let obj = []'),
(1, 'let stringArray = ["a","b","c","d","e","f","g"]'),
(1, 'let numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]'),
(1, 'let randomNum = Math.random() * 11'),
(1, 'let perfection = Me && You'),
(1, 'let perfectStranger = Me || You'),
(1, 'console.log(stringArray.length)'),
(1, 'console.log(numArray.length'),
(1, 'newStringArray = stringArray.push("h")'),
(1, 'newNumArray = numArray.push("11")'),
(2, 'const checkWeight = weight => {
    console.log(`Baggage weight: ${weight} kilograms.`)};
'),
(2, 'true || false; day === "Monday" ? price -= 1.5 : price += 1.5;
    () => return [...cards, cards]
'),
(2, 'toLowerCase() console.log(`My name is ${myName}. I am ${myAge} years old
    in human years which is ${myAgeInDogYears} years old in dog years.`)
'),
(2, '//Is this a comment? littleDucklings.push(newDuck).filter((duck) => duck.length > 5)
    if(typeof dog === "string") {verifyDog(dog)}
'),
(2, 'if (isLoggedIn === true) {
    const statusMessage = "User is logged in."}    
'),
(2, 'const handleTextChange = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value })}; 
'),
(2, 'const myArray = [100, 200, 300];
    const ingredients = ["eggs", "flour", "chocolate"];
'),
(2, 'for (let i = items.length; i >= 0; i -= 1){
    console.log(`${i}. ${items[i]}`)}
'),
(2, 'const randomWord = dictionary[Math.floor(Math.random() * dictionary.length)]
    stats.word = randomWord.split(" ").join(",")
'),
(2, 'const readline = require("readline-sync") startGame()
    const restart = readline.keyInYNStrict(`Would you like to play again?`)
'),
(3, 'for (let i = 0; i < word.length; i += 1) {
    if (word[i] != userWord[i]) {
    return false }}
'),
(3, 'if (stats.word.includes(letter)) {
    replaceLetter(letter)
    getValidLetterGuess()}
'),
(3, 'if (guessIsValid(input) && !stats.usedLetters.includes(input) && typeof input === "string")
    let firstNum = result.subString(0, result.indexOf(operators.includes(result)))
    const operators = ["+", "-", "/", "*"]
'),
(3, '"Does anyone " + "actually like " + "Cypress??"
    const newObj = { 1: "spotted doggo", 2: "puppers", 3: "is-this-a-dog-?"}
    numArr.reduce((a, b) => a + b)
'),
(3, 'li.innerHTML = `${newArr[0].dieImg} = ${newArr[0].dieSum}`
    changeUpThisNumToAString(origNum, origStr)
    checkCondition ? ifTrueDoThis : elseDoThis'
),
(3, 'const rubiksCubeFacts = {
    possiblePermutations: "43,252,003,274,489,856,000",
    invented: "1974"}
'),
(3, 'if (typeof newName === "string" && newName.length > 0) {
    this._name = newName }
    else {console.log("ERROR")}
'),
(3, 'const dogFactory = (name, age, breed) => {}
    e.preventDefault() if (!firstName || !lastName)
    `Price: ${price.toFixed(2)}`
'),
(3, 'const productData = [
    {id: 1, name: Baseball Glove, price: 19.99}
    {id:2, name: Vintage VCR, 21.34}]
');

INSERT INTO game_stats (
    wpm, correct, incorrect, missed
) VALUES
(40, 30, 20, 10),
(10, 20, 30, 40);
