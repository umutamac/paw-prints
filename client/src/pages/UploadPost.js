import React, { useState } from "react";
import { Redirect } from 'react-router-dom'

import axios from "axios";

function UploadPost() {
    const [redirect, setRedirect] = useState(false);
    const [petName, setpetName] = useState("");
    const [img, setimg] = useState("");
    const [petType, setpetType] = useState("");
    const [petExplanation, setpetExplanation] = useState("");

    const handleInp = (event) => { // store each input value in a state using the same function
        let name = event.target.name
        let value = event.target.value

        if (name === "petName") { setpetName(value) }
        else if (name === "petType") { setpetType(value) }
        else if (name === "petExplanation") { setpetExplanation(value) }
    }

    const handleFile = (event) => { // store the input value in a state
        setimg(event.target.files[0])
    }

    const uploadform = (event) => {
        event.preventDefault()

        var formData = new FormData();         //need to append all the values from the form in here using states
        formData.append("file",img)
        formData.append("name",petName)
        formData.append("pettype",petType)
        formData.append("explanation",petExplanation)
        // POSSIBILITY: i could add the form id here so that I wouldnt have to do append for each input, need to test

        axios.post('/api/posts/imgup', formData).then((response) => {
            console.log(response)
            setRedirect(true) //once the form is submitted and a response comes back, redirect user to home page
        })
    }
    return (
        <div>
            {redirect ? <Redirect push to='/home' /> : <div id="redirect"></div> /*redirect user or add empty div (basically do nothing)*/}

            <div id="UploadPostContainer" >
                <form id="postForm" onSubmit={uploadform}>
                    <h1>Create a post</h1>
                    <p>You will need to upload a picture of your pet</p>
                    <input id="petName" type='text' name="petName" placeholder="Pet Name" encType="multipart/form-data" value={petName} onChange={handleInp} />
                    <input id="petImg" type='file' name="file" accept="image/*" encType="multipart/form-data" onChange={handleFile} />
                    <input id="petType" type='text' name="petType" placeholder="Type of Animal" encType="multipart/form-data" value={petType} onChange={handleInp} />
                    <textarea id="petExplanation" type='text' name="petExplanation" value={petExplanation} onChange={handleInp}
                        encType="multipart/form-data" placeholder="What does the pet look like, when was it last seen?" />

                    <button id="uploadBtn" type='submit'>Upload</button>
                </form>
            </div>
        </div>
    );
}

export default UploadPost;
