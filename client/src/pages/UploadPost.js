import React, { useState } from "react";
import { Redirect } from 'react-router-dom'
import axios from "axios";
import { connect } from "react-redux";

function UploadPost(props) {
    const [redirect, setRedirect] = useState(false);
    const [petName, setpetName] = useState("");
    const [petType, setpetType] = useState("");
    const [petColor, setColor] = useState("");
    const [petBreed, setBreed] = useState("");
    const [phone, setPhone] = useState("");
    const [details, setDetails] = useState("");
    const [img, setimg] = useState("");

    const handleInp = (event) => { // store each input value in a state using the same function
        let name = event.target.name;
        let value = event.target.value;

        if (name === "petName") { setpetName(value) }
        else if (name === "petType") { setpetType(value) }
        else if (name === "petColor") { setColor(value) }
        else if (name === "petBreed") { setBreed(value) }
        else if (name === "phoneNum") { setPhone(value) }
        else if (name === "details") { setDetails(value) }
    }

    const handleFile = (event) => { // store the input value in a state
        setimg(event.target.files[0]);
    }

    //console.log(props.auth)
    const uploadform = (event) => {
        event.preventDefault();

        let formData = new FormData();  //need to append all the values from the form in here using states
        // NON-URGENT POSSIBILITY: i could add the form id into FormData() so that I wouldnt have to do append for each input, need to test
        formData.append("name", petName);
        formData.append("petType", petType);
        formData.append("petColor", petColor);
        formData.append("petBreed", petBreed);
        formData.append("phoneNum", phone);
        formData.append("details", details);
        formData.append("file", img);
        formData.append("userID", props.auth.user.id); // append user id of current user, who will be the owner of this post

        axios.post('/api/posts/imgup', formData).then((response) => {
            console.log("-------> Form has been submitted. Response:" + response);
            setRedirect(true); //once the form is submitted and a response comes back, redirect user to dashboard
        })
    }


    return (
        <div className="hero-section">
            {redirect ? <Redirect push to='/dashboard' /> : <div id="noRedirect"></div> /*redirect user or add empty div (basically do nothing)*/}

            <div id="UploadPostContainer" >
                <form id="postForm" onSubmit={uploadform}>
                    <h1>Create a post</h1>
                    <p>You will need to upload a picture of your pet</p>
                    <input id="petName" type='text' name="petName" placeholder="Pet Name" encType="multipart/form-data" value={petName} onChange={handleInp} />
                    <input id="petType" type='text' name="petType" placeholder="Animal type (cat, dog, etc.)" encType="multipart/form-data" value={petType} onChange={handleInp} />
                    <input id="petColor" type='text' name="petColor" placeholder="Color" encType="multipart/form-data" value={petColor} onChange={handleInp} />
                    <input id="petBreed" type='text' name="petBreed" placeholder="Breed" encType="multipart/form-data" value={petBreed} onChange={handleInp} />

                    <input id="phoneNum" type='text' name="phoneNum" placeholder="Callback number" encType="multipart/form-data" value={phone} onChange={handleInp} required />
                    <textarea id="details" type='text' name="details" value={details} onChange={handleInp}
                        encType="multipart/form-data" placeholder="Further description of pet, when and where was it last seen?" required />

                    <input id="petImg" type='file' name="file" accept="image/*" encType="multipart/form-data" onChange={handleFile} required />
                    <button id="uploadBtn" type='submit'>Upload</button>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps)(UploadPost);
//export default UploadPost;