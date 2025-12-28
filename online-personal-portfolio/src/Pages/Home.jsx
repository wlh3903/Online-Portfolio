import { Card, Container, Row } from "react-bootstrap";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import './Home.css';
import Projects from "../Components/Projects";

const Home = () => {
  return (
    <>
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
    </>
  );
}

export default Home;
