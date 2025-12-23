import { Button, Card, CardTitle, Col, Row } from "react-bootstrap";
import React from "react";
import Header from "./Header";


class Page extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <Card>
                <Card.Title><Header/></Card.Title>
            </Card>
        )
    }
}

export default Page