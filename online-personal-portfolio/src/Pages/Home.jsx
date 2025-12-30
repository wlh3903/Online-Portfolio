import React from "react";
import './Home.css';
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import Projects from "../Components/Projects";
import { Card, Container, Row } from "react-bootstrap";

class Home extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <Container>
        <Row>
          <Navigation />
        </Row>
        <Card>
          <Card.Title><Header /></Card.Title>
          <Card.Body className="project">
            <Projects />
          </Card.Body>  
        </Card>
      </Container>
    )
  }
}

export default Home;
