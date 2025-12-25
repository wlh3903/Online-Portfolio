import React from "react";
import Navigation from "../Components/Navigation";
import { Button, Container, Row } from "react-bootstrap";
import resumePDF from '../assets/Resume-Warner_H.pdf'

class Resume extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container>
                <Navigation />
                <Container>
                    <iframe src="https://drive.google.com/file/d/1sNvtIu8usUzG3jJhbEp8_16CH0iSrSnf/preview" />
                    <a href={resumePDF} open="online-personal-portfolio\src\assets\Resume-Warner_H.pdf" target="_blank" rel="noopener noreferrer">
                        <Button>Download Resume</Button>
                    </a>
                </Container>
            </Container>
        )
    }
}

export default Resume