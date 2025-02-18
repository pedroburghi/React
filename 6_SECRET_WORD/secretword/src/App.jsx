//CSS
import './App.css';

//REACT
import { useCallback, useEffect, useState } from 'react';

//data
import {wordsList} from "./data/words";

//components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
];

const guessesQty = 10


function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);


  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters]  = useState([]);

  const [guessedLetters, setguessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);


  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random()* Object.keys(categories).length)];

    console.log(category);

    // pick a random word
    const word = words[category][Math.floor(Math.random()* words[category].length)]

    return{word,category};

  }, [words]);

  //começa o jogo
  const startGame = useCallback(() => {
    //limpe as letras
    clearLetterStates();

    //pick word and pick category
    const {word, category} = pickWordAndCategory();

    //criar um array de letras
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(word, category);
    console.log(wordLetters);

    //fill states
    setPickedWord(word)
    setPickedCategory(category);
    setLetters(wordLetters);


    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  // processo do letter input
  const verifyLetter = (letter) => {
      const normalizedLetter = letter.toLowerCase()

      //checar se a letra já foi usada
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;
    }

    // push a letra chutada ou tire uma tentativa
    if(letters.includes(normalizedLetter)) {
      setguessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
    ]);
    
    setGuesses((actualGuesses) => actualGuesses - 1);


    };

  };

  const clearLetterStates = () => {
    setguessedLetters([]);
    setWrongLetters([]);
  };

  //checar se as tentativas terinaram
  useEffect(() => {

    if(guesses <= 0) {
      //resetar todos estados
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);


  //checar condição de vitória
  useEffect(() => {

    const uniqueLetters = [... new Set(letters)]

    //condição de vitória
    if(guessedLetters.length === uniqueLetters.length) {
      //colocar a pontuação
      setScore((actualScore) => actualScore += 100)

      // restarta o jogo com outra palavra
      startGame();


    }

  }, [guessedLetters, letters, startGame])

  //restarta o jogo
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);

    setGameStage(stages[0].name);
  }


  return (
    <div className="App">
     {gameStage === "start" && <StartScreen startGame={startGame}/>}
     {gameStage === "game" && (<Game verifyLetter={verifyLetter} 
     pickedWord={pickedWord} 
     pickedCategory={pickedCategory} 
     letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}
     />
     )}
     {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
};

export default App;
