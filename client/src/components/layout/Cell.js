import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import "./footer.css"

function Cell(props) {
    function deleteFunction(id) {
        axios.delete("/api/posts/" + id)
            .then(() => (props.updatepetdata(props.imgPublicID)))
            .catch(err => (console.log(err)))
    }
    // console.log(props)

    return (
        <div className="medium-4 cell" id={props._id}>

            <div className=" petCard">



                <img className="petPic" alt="animal_picture" src={props.imageURL} />

                <div className="delDiv">
                    
                    {
                        props.auth.user.id === props.userID
                            /* is current viewer    =    the one who posted this? */
                            ? <button className="button alert small radius deleteBTN" onClick={() => { deleteFunction(props._id) }}>Delete</button>
                            : <div id="notTheOwnerOfPost"><br/><br/></div>
                    }
                </div>
                <div className="card-section">
                    <h4 className="nerko">{props.petType}</h4>
                    <p>{props.petName}, {props.petBreed}, {props.petColor}.
                        <br />
                        {props.details}.
                        <br />
                        Please call {props.phoneNum} if seen
                    </p>

                </div>

            </div>

        </div>
    );
}

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps)(Cell);
