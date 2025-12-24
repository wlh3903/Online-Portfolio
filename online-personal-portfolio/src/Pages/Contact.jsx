import React from "react";
import Navigation from "../Components/Navigation";

class Contact extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <div>
                    Contact Info
                </div>
                <Navigation />
            </>
        )
    }
}

export default Contact