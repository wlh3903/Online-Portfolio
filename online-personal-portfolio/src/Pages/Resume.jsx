import React from "react";
import Navigation from "../Components/Navigation";
import { Button, Container, Ratio, Row } from "react-bootstrap";
import resumePDF from '../assets/Resume-Warner_H.pdf'
import "./Resume.css"

class Resume extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container>
                <Navigation />
                <Ratio className="preview">
                    <iframe className="viewer" src="https://drive.google.com/file/d/1sNvtIu8usUzG3jJhbEp8_16CH0iSrSnf/preview" />
                </Ratio>
                <a href={resumePDF} download="online-personal-portfolio\src\assets\Resume-Warner_H.pdf" target="_blank" rel="noopener noreferrer">
                    <Button variant="info">Download Resume</Button>
                </a>
            </Container>
        )
    }
}

export default Resume