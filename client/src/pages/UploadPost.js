import React, { useState } from "react";
import { Redirect } from 'react-router-dom'
import axios from "axios";

function UploadPost() {
    const [redirect, setRedirect] = useState(false);
    const [petName, setpetName] = useState("");
    const [petType, setpetType] = useState("");
    const [petColor, setColor] = useState("");
    const [petBreed, setBreed] = useState("");
    const [phone, setPhone] = useState("");
    const [details, setDetails] = useState("");
    const [img, setimg] = useState("");
    

    const handleInp = (event) => { // store each input value in a state using the same function
        let name = event.target.name
        let value = event.target.value

        if (name === "petName") { setpetName(value) }
        else if (name === "petType") { setpetType(value) }
        else if (name === "petColor") { setColor(value) }
        else if (name === "petBreed") { setBreed(value) }

        else if (name === "phoneNum") { setPhone(value) }
        else if (name === "details") { setDetails(value) }

    }

    const handleFile = (event) => { // store the input value in a state
        setimg(event.target.files[0])
    }

    const uploadform = (event) => {
        event.preventDefault()

        var formData = new FormData();         //need to append all the values from the form in here using states
        formData.append("file", img)
        formData.append("name", petName)
        formData.append("petType", petType)
        formData.append("phoneNum", phone)
        formData.append("details", details)
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

export default UploadPost;
