import React from "react";



function Login() {
  return (

     
<>
    <header>
        <div>
            
            <h1 >
                <b><i><u>Paw Prints</u></i></b>
            </h1>
        </div>

    </header>
    <div>
        <form>
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
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
                        
                            <button type="submit" >Log In</button>
                        
                    </div>

                </div>
            </div>
        </form>
    </div>
</>

    



  );
}

export default Login;
