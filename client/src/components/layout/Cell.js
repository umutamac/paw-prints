import React from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import "./footer.css"

function Cell(props) {
    function deleteFunction(id) {
        axios.delete("/api/posts/" + id)
            .then(() => (window.location.reload(false)))
            .catch(err => (console.log(err)))
    }
    // console.log(props)

    return (
        <div className="medium-4 cell">
            <div className="cell" id={props._id}>
                <div className="card">
                    <img alt="animal_picture" src={props.imageURL} />
                    <div className="card-section">
                        <h4 className="nerko">{props.petType}</h4>
                        <p>{props.petName}, {props.petBreed}, {props.petColor}. <br />
                            {props.details}. <br />
                                                Please call {props.phoneNum} if seen
                                            </p>
                    </div>
                    {
                    props.auth.user.id === props.userID
                    /* is current viewer    =    the one who posted this? */
                        ? <button onClick={() => deleteFunction(props._id)}>Delete</button>
                        : <div id="notTheOwnerOfPost"></div>
                }
                </div>

            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps)(Cell);
