import React from "react";




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

  );
}

export default Signup;
