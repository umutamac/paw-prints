import React from "react";
// import { Link } from "react-router-dom";
import "./footer.css"

import axios from "axios";
import store from "../../store";

function Cell(animals) {
    function deleteFunction(id) {
        axios.delete("/api/posts/" + id)
            .then(() => (console.log("post deleted")))
            .catch(err => (console.log(err)))
    }

    return (
        <div className="cell" id={animals._id}>
            <div className="card">
                <img alt="animal_picture" src={animals.imageURL} />
                <div className="card-section">
                    <h4>{animals.petType}</h4>
                    <p>{animals.petName}, {animals.petBreed}, {animals.petColor}</p>
                    <p>{animals.details}</p>
                    <p>Please call {animals.phoneNum} if seen</p>
                </div>
            </div>

            <p>{store.user}hi</p>

            { true/* is current wiever the one who posted this? */
                ? <button onClick={() => deleteFunction(animals._id)}>Delete</button>
                : <div id="notTheOwnerOfPost"></div>}
        </div>

    );
}

export default Cell;