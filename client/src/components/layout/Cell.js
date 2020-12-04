import React from "react";
// import { Link } from "react-router-dom";
import "./footer.css"


function Cell(animals) {

    return (
        <div className="cell" id={animals.id}>
            <div className="card">
                <img alt="animal_picture" src={animals.imageURL} />
                <div className="card-section">
                    <h4>{animals.petType}</h4>
                    <p>{animals.petName}, {animals.petBreed}, {animals.petColor}</p>
                    <p>{animals.details}</p>
                    <p>Please all {animals.phoneNum} if seen</p>
                </div>
            </div>
        </div>
    );
}

export default Cell;