import React from "react";
import "./Header.css"

class Header extends React.Component{
    render(){
        return(
            <div className="body">
                <h1 className="title">
                    Hello! I am Warner Harper
                </h1>
                <p className="brief">
                    I am a second year Software Engineering major at Rochester Institute of Technology.<br />
                    The images below will redirect you to my top 3 projects I have completed, as well as what I contriubtued to make them successful.
                </p>
            </div>
        )
    }
}

export default Header