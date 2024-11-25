import React, { useState } from "react";

const Counters = () => {
    const [level, setLevel] = useState(3);
    const [digits, setDigits] = useState(3);
    const [lives, setLives] = useState(3);
    const [attempts, setAttempts] = useState(10);
    const [time, setTime] = useState(60);

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
                        </li>
                        <li>
                            <p className="fs-5 d-flex ms-4 align-items-center mb-3 mt-2 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                                Time:<span className="ms-2" id="counter">{time}</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Counters;