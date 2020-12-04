import React, { useState, useEffect } from "react";
// import from "react-router-dom";
import axios from "axios";
import Cell from "./Cell";

function AllPosts() {
    // let allPetData;
    let [allPetData, setAllPetData] = useState([]);

    useEffect(() => {
        axios.get('/api/posts/allposts')
            .then((dbresponse) => {
                setAllPetData(dbresponse.data)
                console.log(allPetData);
            })
    })

    return (
        <div className="hero-section content">
            <div className="grid-container" id="find">
                <h1 id="title">Paw Prints</h1>
                <div className="grid-x grid-padding-x">
                    <div className="medium-2 cell"></div>
                    <div className="medium-8 cell">
                        <h4>Find Your Lost Pets Here</h4>
                        <div className="grid-container">
                            <div className="grid-x grid-margin-x small-up-2 medium-up-3">
                                {
                                    // JSON.stringify(allPetData)
                                    allPetData.map((animal, i) => {

                                    //iterate thru each post and pass all their info to each cell
                                         return (
                                             <Cell key={i} {...animal} />
                                         )
                                     })
                                }
                            </div>

                            <ul className="pagination-pointed pagination text-center" role="navigation" aria-label="Pagination">
                                <li className="pagination-previous disabled">Previous <span className="show-for-sr">page</span></li>
                                <li className="current"><span className="show-for-sr">You're on page</span> 1</li>
                                <li><a className="pagination-pointed-button" href="#" aria-label="Page 2">2</a></li>
                                <li><a className="pagination-pointed-button" href="#" aria-label="Page 3">3</a></li>
                                <li><a className="pagination-pointed-button" href="#" aria-label="Page 4">4</a></li>
                                <li className="ellipsis" aria-hidden="true"></li>
                                <li className="pagination-next">
                                    <a className="pagination-pointed-button" href="#" aria-label="Next page">
                                        Next <span className="show-for-sr">page</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default AllPosts;