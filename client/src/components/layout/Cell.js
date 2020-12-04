import React from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import "./footer.css"

function Cell(props) {
    function deleteFunction(id) {
        axios.delete("/api/posts/" + id)
            .then(() => (console.log("Post deleted")))
            .catch(err => (console.log(err)))
    }
    // console.log(props)

    return (
        <div className="cell" id={props._id}>
            <div className="card">
                <img alt="animal_picture" src={props.imageURL} />
                <div className="card-section">
                    <h4>{props.petType}</h4>
                    <p>{props.petName}, {props.petBreed}, {props.petColor}</p>
                    <p>{props.details}</p>
                    <p>Please call {props.phoneNum} if seen</p>
                </div>
                {
                    props.auth.user.id === props.userID
                    /* is current viewer    =    the one who posted this? */
                        ? <button onClick={() => deleteFunction(props._id)}>Delete</button>
                        : <div id="notTheOwnerOfPost"></div>
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps)(Cell);
