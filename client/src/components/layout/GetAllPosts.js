import React, { useState, useEffect } from "react";
import axios from "axios";
import Cell from "./Cell";

function AllPosts() {
    let [allPetData, setAllPetData] = useState([]);

    useEffect(() => {
        axios.get('/api/posts/allposts')
            .then((dbresponse) => {
                setAllPetData(dbresponse.data)
                console.log(allPetData);
            })
    })

    return (
        <div>
            {
                allPetData.map((animal, i) => {
                    //iterate thru each post and pass all their info to each cell
                    return (
                        <Cell key={i} {...animal} />
                    )
                })
            }
        </div>
    );
}

export default AllPosts;