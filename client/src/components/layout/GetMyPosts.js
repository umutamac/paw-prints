import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Cell from "./Cell";

function MyPosts(props) {
    let [allPetData, setAllPetData] = useState([]);

    function updatePetData(imgID) {
        setAllPetData(  allPetData.filter(item => item.imgPublicID!==imgID) );
    } 

    useEffect(() => {
        axios.get('/api/posts/' + props.auth.user.id)
            .then((dbresponse) => {
                setAllPetData(dbresponse.data)
                //console.log(allPetData);
            })
    },[props.auth.user.id])

    return (
        <div>
            {
                allPetData.map((animal, i) => {
                    //iterate thru each post and pass all their info to each cell
                    return (
                        <Cell key={i} updatePetData={updatePetData} {...animal} />
                    )
                })
            }
        </div>
    );
}
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps)(MyPosts);