import React from "react";
import "./style.css";


function WelcomeButton() {


    const logout = () => {
        window.location.href = '/';
    }
    return (
        <div class='nav-bar item'>
            <p class="welcome">Psst...Hey there, !</p>
            <p><button onClick={logout} id="logout-btn" class="btn button">LogOut</button></p>
        </div>
    )
}



export default WelcomeButton;