import React, { useState } from "react";
import { Redirect } from 'react-router-dom'

import axios from "axios";

function UploadPost() {
    const [redirect, setRedirect] = useState(false)

    const uploadform = (event) => {
        event.preventDefault()

        //package file info and send it back
        var formData = new FormData();

        axios.post('/api/pics/imgup', formData).then((response) => {
            
            console.log(response)
            setRedirect(true)
        })
    }
    return (
        <div>
            {redirect ? <Redirect push to='/home' /> : <div id="redirect"></div>}

            <div id="UploadPostContainer">

                <h1>Create a post</h1>
                <p>You will need to upload a picture of your pet</p>

                <input id="petName" type='text' name="petName" placeholder="Pet Name" encType="multipart/form-data" />
                <input id="petImg" type='file' name="file" accept="image/*" encType="multipart/form-data" />
                <input id="petType" type='text' name="petType" placeholder="Type of Animal" encType="multipart/form-data" />
                <textarea id="petExplanation" type='text' name="petExplanation" placeholder="What does the pet look like, when was it last seen?" encType="multipart/form-data" />

                <button id="uploadBtn" type='button' onClick={uploadform}>Upload</button>

            </div>
        </div>
    );
}

export default UploadPost;
