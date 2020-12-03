import React from "react";
// import { Link } from "react-router-dom";


function Cell(animals) {

    return (
        <div className="cell">
            <div className="card">
                <img alt="animal" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/07/15092404/do-dogs-grieve-other-dogs.jpg" />
                <div className="card-section">
                    <h4>This is Sheila.</h4>
                    <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
            </div>
        </div>
    );
}

export default Cell;