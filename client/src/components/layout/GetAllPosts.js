import React, { useState, useEffect } from "react";
import axios from "axios";
import Cell from "./Cell";

function AllPosts() {
    let [allPetData, setAllPetData] = useState([]);

    function updatepetdata(imgID) {
        setAllPetData(  allPetData.filter(item => item.imgPublicID!==imgID) );
    } 

    useEffect(() => {
        axios.get('/api/posts/allposts')
            .then((dbresponse) => {
                setAllPetData(dbresponse.data)
                //console.log(allPetData);
            })
    },[]) // empty array at the end to stop page from infinitely reloading

    return (
        <div className="grid-x grid-padding-x">
            {
                allPetData.map((animal, i) => {
                    //iterate thru each post and pass all their info to each cell
                    return (
                        <Cell key={i} updatepetdata={updatepetdata} {...animal} />
                    )
                })
            }
        </div>
    );
}

export default AllPosts;