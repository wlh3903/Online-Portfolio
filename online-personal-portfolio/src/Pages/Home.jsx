import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import './Home.css';

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Navigation />
        </Row>
      </Container>
      <Card>
        <Card.Title><Header /></Card.Title>
        <Card.Body>
          {/* Add some content here */}
          <p>Welcome to the Home Page!</p>
          <Button variant="primary">Click me</Button>
        </Card.Body>  
      </Card>
    </>
  );
}

export default Home;
