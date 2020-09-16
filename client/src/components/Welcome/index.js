import React, { useEffect } from "react";
import "./style.css";

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


    // if (isLoggedIn) {
    //     <div className="authentication">
    //       <button>Logout</button>
    //     </div>
    //   } else {
    //     <a href='http://localhost:8888'>
    //       <button>Login</button>
    //     </a>
  

    return (<div class="navbar-header">
        <p class="welcome">Welcome: <span class="user"></span>
            <div class="col-sm-4 col-lg-12">
                <button id="logout-btn" class="btn button" data-toggle="modal" data-target="#loginModal">LogOut</button>  
            </div>
        </p>
    </div>
    )
}



export default WelcomeButton;