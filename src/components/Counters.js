import React from "react";
import ProgressBar from "./ProgressBar";

const Counters = ({level, digits, lives, attempts, time, startGame, isDisabledStartBut, isProgressBarVisible}) => { 

    return (
        <div className="container-fluid text-center">
            <div className="row content">
                <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-dark" style={{ width: "280px", height: "75vh" }}>
                    <h2 className="fs-4 d-flex ms-4 align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        Level:<span className="ms-2 level">{level}</span>
                    </h2>
                    <h2 className="fs-4 d-flex ms-4 align-items-center mb-3 mt-2 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        Digits:<span className="ms-2 level">{digits}</span>
                    </h2>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <p className="fs-5 d-flex ms-4 align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                                Lives❤️:<span className="ms-2" id="lives">{lives}</span>
                            </p>
                        </li>
                        <li>
                            <p className="fs-5 d-flex ms-4 align-items-center mb-3 mt-2 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                                Attempts:<span className="ms-2" id="attempts">{attempts}</span>
                            </p>
                        </li><br/>
                        <li>
                        <p className="fs-5 d-flex ms-4 align-items-center mb-3 mt-2 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                              Time:
                            </p>
                            <br/>
                           {isProgressBarVisible && <ProgressBar max={60} value={time}></ProgressBar>}                        
                        </li>
                        {isProgressBarVisible && <li><button className="btn btn-danger btn-sm mt-3 w-50 py-2" onClick={startGame} disabled={isDisabledStartBut} type="submit">Start!</button> </li>}
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Counters;