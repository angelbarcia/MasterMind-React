import React from 'react';

const Game = ({htmlFor, value, play, handleInput, isDisabled, isVisibleGameOver, level, isVisibleLength, isVisibleTimeUp, startTimer, isWon, secret, hide, isWonLevel10}) => {

  return (
  <div className="px-3 pt-3 my-3 text-center">
      <h1 className="display-4 mb-4 fw-bold text-body-emphasis">Let's play.</h1>
      <div className="col-lg-6 mx-auto">
          
              <h1 className="h3 mb-4 fw-normal">Please insert a number</h1>
              <div className="form-floating mb-3">
                  <input name={htmlFor} value={value} onChange={handleInput} type="number" className="form-control" id={htmlFor} placeholder="The secret number is ..."/>
                  <label for="guess">The secret number is ...</label>   
              </div>
              <button className="btn btn-info mb-5 w-100 py-2" onClick={play} id="playButton" disabled={isDisabled}>Play</button>
              {isVisibleGameOver && <p>Game over, Try Again?</p>}
              {isVisibleGameOver && <button className="btn btn-success mb-5 w-100 py-2" onClick={() => window.location.reload()} id="restartButton">Restart!</button>}
              {isVisibleLength && <p>Insert a number with <strong>{level}</strong> characters.</p>} 
              {isVisibleTimeUp && <h1>Time's up!</h1>}
              {isVisibleTimeUp && <p>The correct number was {secret}.</p>}
              {isVisibleTimeUp && <button className="btn btn-success mb-5 w-100 py-2" onClick={startTimer} id="timesUpButton">Continue</button>}
              {isWon && <h1>You Win!</h1>} 
              {<p>The correct number was {secret}.</p>}
              {isWon && <button className="btn btn-success mb-5 w-100 py-2" onClick={hide} id="timesUpButton">Continue</button>}
              {isWonLevel10 && <h1>You Passed The Game!</h1>} 
      </div>
  </div>
);
};

export default Game;