import React from "react";

const Table = ({moves}) => {
    return (
    <div className="col-sm-2 ms-3 sidenav">
    <div className="container-fluid text-center">    
        <div className="row content">    
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-dark" style={{width: "280px", height: "70vh"}}>
                <h2 className="fs-4 d-flex ms-4 align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <table>
                        <thead>
                            <tr>
                             <th><span className="ms-4">Guess</span></th>
                            <th><span className="ms-3">Message</span></th>
                            </tr>
                        </thead>
                    <tbody className="mt-2" id="moves">
                    {moves.map((move)=><tr><td>{move.guess}</td><td>{move.message}</td></tr>)}
                    </tbody>
                    </table>        
                </h2>
            </div>
        </div>
    </div>
</div>
);
};

export default Table;