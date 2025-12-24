import { Button, Card, CardTitle, Col, Row } from "react-bootstrap";
import React from "react";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import './Home.css'


class Page extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <>
            <Card>
                <Card.Title><Header/></Card.Title>
                <Card.Body>

                </Card.Body>
                <Card.Footer className="footer">
                    <Navigation />
                </Card.Footer>
            </Card>
            </>
        )
    }
}

export default Page