import React, {useState} from "react";
import "./App.css";
import Counters from "./Counters";
import Game from "./Game";
import Table from "./Table";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useActionData } from "react-router-dom";

const create_random_digit = (lower = 0, upper = 9) => {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;}

const get_number = (digits) => {
  let number = 0; // 3615
  for (const digit of digits) {
      number = 10 * number + digit;
  }
  return number;}

const create_secret = (level = 3) => {
    if (level > 10 || level < 3)
        throw "Game level should be between 3 and 10"
    let digits = []
    digits.push(create_random_digit(1, 9))
    while (digits.length < level) {
        let candidate = create_random_digit(0, 9);
        if (digits.includes(candidate)) continue;
        digits.push(candidate);
    }
    return get_number(digits);
}
const evaluate = (guess, secret) => {
  const guessAsString = guess.toString();
  const secretAsString = secret.toString();
  let perfectMatch = 0;
  let partialMatch = 0;
  for (let i=0;i<secretAsString.length;i++){
      const s = secretAsString[i];
      for (let j=0;j<guessAsString.length;j++){
          const g = guessAsString[j];
          if (s === g){
              if (i === j){
                  perfectMatch++;
              } else {
                  partialMatch++;
              }
          }
      }
  }
  if (perfectMatch === 0 && partialMatch === 0){
      return "No match";
  }
  let message = "";
  if (partialMatch > 0){
      message = `-${partialMatch}`;
  }
  if (perfectMatch > 0){
      message = `${message}+${perfectMatch}`;
  }
  return message;
}

const App = () => {
  const [time, setTime] = useState(60);
  const [attempts, setAttempts] = useState(10);
  const [lives, setLives] = useState(3);
  const [digits, setDigits] = useState(3);
  const [level, setLevel] = useState(3);
  const [maxAttempts, setMaxAttempts] = useState(10);
  const [moves, setMoves] = useState([]);
  const [guess, setGuess] = useState(123);
  const [secret, setSecret] = useState(create_secret(level));
  const [isDisabled, setIsDisabled] = useState(true);
  const [isDisabledStartBut, setisDisabledStartBut] = useState (false); 
  const [isVisibleGameOver, setisVisibleGameOver] = useState (false);
  const [isProgressBarVisible, setIsProgressBarVisible] = useState (true);
  const [isVisibleLength, setIsVisibleLength] = useState(false);
  const [isVisibleTimeUp, setisVisibleTimeUp] = useState(false);
  const [isWon, setisWon] = useState(false);
  let timerInterval;
  

  const startTimer = () => {
    clearInterval(timerInterval);
    setTime(60);
    setisWon(false);
    setIsProgressBarVisible(true)
    setisVisibleTimeUp(false)
    setisVisibleGameOver(false);
    setisDisabledStartBut(true);
    setIsDisabled(false);
    timerInterval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime < 1){
          setLives((prevLives) => {
        if (prevLives < 1){
          setisVisibleGameOver(true);
          setIsDisabled(true); 
          setIsProgressBarVisible(false);
          setTime(10000);
          setLevel(3); 
          setDigits(3);
          setAttempts(maxAttempts);
          setLives(4); 
          setMoves([]);
         }
          
        else{
            setisVisibleTimeUp(true);
            setIsProgressBarVisible(false);
            clearInterval(timerInterval);
            setTime(60);
            setAttempts(maxAttempts);
            return prevLives - 1;
          }
        });
        return 3;}
        return prevTime - 1;
        });}, 1000);
    };
        

const play = () => {
  setisWon(false)
  setisVisibleTimeUp(false);
  if(guess.toString().length == level){
    setIsVisibleLength(false);
  setMoves([...moves, {guess, message:evaluate(guess, secret)}]) 
    if(guess == secret){
      setLevel(level + 1);
      setDigits(digits + 1);
      setAttempts(maxAttempts + 2);
      setMoves([]);
      setisWon(true);
      setIsProgressBarVisible(false);
      setTime(1000);
    }
    if(lives >= 1 && attempts >= 1){
      setAttempts(attempts - 1)
    }
    if((attempts < 1 && lives === 1)){
      setisVisibleGameOver(true);
            setIsDisabled(true); 
            setIsProgressBarVisible(false);
            setTime(10000);
            setLevel(3); 
            setDigits(3);
            setAttempts(maxAttempts);
            setLives(4); 
            setMoves([]);
    };
    if (attempts < 1 && lives > 0) {
      setLives((prevLives) => prevLives - 1);
      setTime(60);
      setAttempts(maxAttempts);
      setMoves([]);
      setSecret(create_secret(level));
    }
  }
  else{
    setIsVisibleLength(true);
  }}
 
  const hide = () => {
    setisWon(false)
    setTime(60)
    setAttempts(maxAttempts + 2)
    setLives(lives + 1)
    setIsProgressBarVisible(true)
  }

const handleInput = (e) => {
setGuess(e.target.value)
}

 return( 
  <div>
 <NavigationBar />
    <div className="row">
      <div className="col-12 col-md-2">
        <Counters time={time} digits={digits} lives={lives} attempts={attempts} level={level} startGame={startTimer} isDisabledStartBut={isDisabledStartBut} isProgressBarVisible={isProgressBarVisible}/>
      </div>
      <div className="col-12 col-md-8">
        <Game play={play} handleInput={handleInput} value={guess} htmlFor={"guess"} isDisabled={isDisabled} isVisibleGameOver={isVisibleGameOver} level={level} isVisibleLength={isVisibleLength} isVisibleTimeUp={isVisibleTimeUp} startTimer={startTimer} isWon={isWon} secret={secret} hide={hide}/>
      </div>
      <div className="col-12 col-md-2">
        <Table moves={moves} />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Footer />
      </div>
    </div>
  </div>
);
};


export default App;