import React from "react";



<<<<<<< HEAD

function Signup() {

    function saveUser(event){
        console.log("Save a new User");
       
       
       
       
       }
       


    return (
    <>
    <header>
        <div>
            
            <h1 >
                <b><i><u>Paw Prints  Sign up</u></i></b>
            </h1>
        </div>

    </header>
    <div>
        <form>
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                <div className="medium-6 cell">
                        <label>Name
                            <input type="text"  placeholder="Name"></input>
                        </label>
                    </div>
                    <div className="medium-6 cell">
                        <label>Email
                            <input type="text" name="email" placeholder="Email"></input>
                        </label>
                    </div>
                    <div className="medium-6 cell">
                    </div>
                    <div className="medium-6 cell">
                        <label>Password
                            <input type="text" name="password" placeholder="Password"></input>
                        </label>
                    </div>
                    <div className="medium-6 cell">
                        <label>Phone Number
                            <input type="text" name="phonenumber" placeholder="Phone Number"></input>
                        </label>
                    </div>
                    <div className="medium-6 cell">
                        <label>City
                            <input type="text" name="city" placeholder="City"></input>
                        </label>
                    </div>
                    <div className="medium-6 cell">
                        <label>State
                            <input type="text" name="state" placeholder="State"></input>
                        </label>
                    </div>
                    <div className="medium-6 cell">
                        
                            <button type="submit" onClick={saveUser}>Save</button>
                        
                    </div>

                </div>
            </div>
        </form>
    </div>
</>
=======
function Login() {
    return (
        <div id="loginContainer">
            <header>

                <h1 >
                    <b><i><u>Paw Prints  Sign up</u></i></b>
                </h1>

            </header>

            <div id="loginForm">
                <form>
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">

                            <div className="medium-6 cell">
                                <label>Name
                                    <input type="text" placeholder="Name"></input>
                                </label>
                            </div>
>>>>>>> 0eccf63af3227cda39e60f92f9c19d3c68d5a462

                            <div className="medium-6 cell">
                                <label>Email
                                    <input type="text" placeholder="Email"></input>
                                </label>
                            </div>

                            <div className="medium-6 cell">
                            </div>

                            <div className="medium-6 cell">
                                <label>Password
                                    <input type="text" placeholder="Password"></input>
                                </label>
                            </div>

                            <div className="medium-6 cell">
                                <label>Phone Number
                                    <input type="text" placeholder="Phone Number"></input>
                                </label>
                            </div>

                            <div className="medium-6 cell">
                                <label>City
                                    <input type="text" placeholder="City"></input>
                                </label>
                            </div>

                            <div className="medium-6 cell">
                                <label>State
                                    <input type="text" placeholder="State"></input>
                                </label>
                            </div>

                            <div className="medium-6 cell">

                                <button type="submit" >Log In</button>

                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
