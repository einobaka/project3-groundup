import React, { useEffect } from "react";
// import "./style.css";


function WelcomeButton() {
    // if there's a user show the message below
    // const loggedInUser = "";
    // const [username, setUsername] = useEffect("");
    // const [password, setPassword] = useEffect("");
    // const [user, setUser] = useEffect()
    // useEffect(() => {
    //     const loggedInUser = "Emily"
    //     console.log("Emily")
    //     if (loggedInUser) {
    //         const foundUser = true;
    //         setUser(foundUser);
    //     }
    // }, []);
    // if (user) {
    //     return <div>{loggedInUser} is loggged in</div>;
    // } else {}
    return (<div class="navbar-header">
        <p class="welcome">Welcome, <span class="user"></span>
            <div>
                <button id="login-btn" class="btn button" data-toggle="modal" data-target="#loginModal">Login</button>
                <button id="signup-btn" class="btn button" data-toggle="modal" data-target="#signUpModal">Sign Up</button>
            </div>
            <div class="col-6 col-sm-4 col-lg-3">
            
          </div>
          <div class="col-6 col-sm-4 col-lg-3">
            
          </div>
        </p>
    </div>
    )
}



export default WelcomeButton;