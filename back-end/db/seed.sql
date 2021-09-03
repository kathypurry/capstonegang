\c typinggame_db;

-- INSERT INTO users (
--     username, email, password
-- ) VALUES
-- ('KATHYISCOOL', 'Kathy@pursuit.org', 'issapassword'),
-- ('CANDYISCOOL', 'CANDY@pursuit.org', 'issapassowrdlol233456');

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
(2, 'const checkWeight = weight => {
    \nconsole.log(`Baggage weight: ${weight} kilograms.`)};
'),
(2, 'true || false; day === "Monday" ? price -= 1.5 : price += 1.5;
    \n () => return [...cards, cards]
'),
(2, 'toLowerCase() console.log(`My name is ${myName}. I am ${myAge} years old
    \nin human years which is ${myAgeInDogYears} years old in dog years.`)
'),
(2, '//Is this a comment? littleDucklings.push(newDuck).filter((duck) => duck.length > 5)
    \nif(typeof dog === "string") {verifyDog(dog)}
'),
(2, 'if (isLoggedIn === true) {
    \n const statusMessage = "User is logged in."}    
'),
(2, 'const handleTextChange = (e) => {
    \n setProduct({ ...product, [e.target.id]: e.target.value });
    \n};   
'),
(2, 'const myArray = [100, 200, 300];
    \nconst ingredients = ["eggs", "flour", "chocolate"];
'),
(2, 'for (let i = items.length; i >= 0; i -= 1){
    \nconsole.log(`${i}. ${items[i]}`)}
'),
(2, 'const randomWord = dictionary[Math.floor(Math.random() * dictionary.length)]
    \nstats.word = randomWord.split(" ").join(",")
'),
(2, 'const readline = require("readline-sync") startGame()
    \nconst restart = readline.keyInYNStrict(`Would you like to play again?`)
'),
(3, 'for (let i = 0; i < word.length; i += 1) {
    \nif (word[i] != userWord[i]) {
    \nreturn false }}
'),
(3, 'if (stats.word.includes(letter)) {
    \nreplaceLetter(letter)
    \ngetValidLetterGuess()}
'),
(3, 'if (guessIsValid(input) && !stats.usedLetters.includes(input) && typeof input === "string")
    \nlet firstNum = result.subString(0, result.indexOf(operators.includes(result)))
    \nconst operators = ["+", "-", "/", "*"]
'),
(3, '"Does anyone " + "actually like " + "Cypress??"
    \nconst newObj = { 1: "spotted doggo", 2: "puppers", 3: "is-this-a-dog-?"}
    \nnumArr.reduce((a, b) => a + b)
'),
(3, 'li.innerHTML = `${newArr[0].dieImg} = ${newArr[0].dieSum}`
    \nchangeUpThisNumToAString(origNum, origStr)
    \ncheckCondition ? ifTrueDoThis : elseDoThis
'),
(3, 'const rubiksCubeFacts = {
    \npossiblePermutations: "43,252,003,274,489,856,000",
    \ninvented: "1974"}
'),
(3, 'if (typeof newName === "string" && newName.length > 0) {
    \nthis._name = newName }
    \nelse {console.log("ERROR")}
'),
(3, 'const dogFactory = (name, age, breed) => {}
    \ne.preventDefault() if (!firstName || !lastName)
    \n`Price: ${price.toFixed(2)}`
'),
(3, 'const itemsAdded = cart.map(item => return item.name)
    \n
    \n
'),
(3, 'const productData = [
    \n{id: 1, name: Baseball Glove, price: 19.99},
    \n{id:2, name: Vintage VCR, 21.34}]
');

-- INSERT INTO game_stats (
--     wpm, correct, incorrect, missed
-- ) VALUES
-- (40, 30, 20, 10),
-- (10, 20, 30, 40);
