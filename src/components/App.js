import React, {useState} from "react";
import "./App.css";
import NavigationBar from "./NavigationBar";
import Counters from "./Counters";
import Game from "./Game";
import Table from "./Table";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  const [time, setTime] = useState(60);
  const [attempts, setAttempts] = useState(10);
  const [lives, setLives] = useState(3);
  const [digits, setDigits] = useState(3);
  const [level, setLevel] = useState(3);
  const [startGame, setStartGame] = useState (false);
  const [maxAttempts, setMaxAttempts] = useState(10);
  let timerInterval;

const startTimer = () => {
  if(!startGame){
    setStartGame(true);
    timerInterval = setInterval(() => {
      setTime((prevTime) => {
        if(prevTime <= 1 && lives < 1){
          clearInterval(timerInterval);
          setLives(3);
        }
        if (prevTime <= 1) { 
          alert("Time's up!"); 
          setLives((prevLives) => prevLives - 1);
          setAttempts(maxAttempts); 
          setTime(60); 
          return 0; 
        }
        return prevTime - 1;
      });
    }, 1000);
  }
}

const play = () => {
  if(lives >= 1 && attempts >= 1){
    setAttempts((prevAttempts) => prevAttempts - 1)
  }
  if(lives === 0 || (attempts < 1 && lives === 1)){
    clearInterval(timerInterval);
    alert ("Game Over");
    setStartGame(false);
    setLives(3);
    setAttempts(maxAttempts);
    setLevel(3);
    setDigits(3);
    setTime(60);
  };

  if (attempts < 1 && lives > 0) {
    setLives((prevLives) => prevLives - 1);
  }
} 


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
  

 return( 
  <div>
  <NavigationBar />
    <div className="row">
      <div className="col-12 col-md-2">
        <Counters time={time} digits={digits} lives={lives} attempts={attempts} level={level} startGame={startTimer} />
      </div>
      <div className="col-12 col-md-8">
        <Game play={play}/>
      </div>
      <div className="col-12 col-md-2">
        <Table />
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