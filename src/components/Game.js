import React from 'react';

const Game = (htmlFor, value, play) => {

  return (
  <div className="px-3 pt-3 my-3 text-center">
      <h1 className="display-4 mb-4 fw-bold text-body-emphasis">Let's play.</h1>
      <div className="col-lg-6 mx-auto">
          <form>
              <h1 className="h3 mb-4 fw-normal">Please insert a number</h1>
              <div className="form-floating mb-3">
                  <input name={htmlFor} value={value} type="number" className="form-control" id="guess" placeholder="The secret number is ..."/>
                  <label for="guess">The secret number is ...</label>   
              </div>
              <button className="btn btn-info mb-5 w-100 py-2" onClick={play} type="submit" id="playButton">Submit</button>
          </form>
      </div>
  </div>
);
};

export default Game;