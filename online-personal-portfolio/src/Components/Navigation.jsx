import React from "react";
import "./Navigation.css";
import { Container, Nav, Navbar } from "react-bootstrap";


class Navigation extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            active: ''
        }
    }

    componentDidUpdate = (oldPorps) => {
        if (oldPorps.active !== this.props.active){
            this.setState({
                active: this.props.active
            })
            console.log(this.props.active)
        }
    }

    render(){
        return(
            <>
            <Navbar>
                <Container>
                    <Navbar.Brand className="footer" href="/">Home</Navbar.Brand>
                    <Nav variant="underline" activeKey={this.state.active}>
                        <Nav.Item >
                            <Nav.Link href='https://dot.cards/warnerharper' target="_blank" className="footer">Contact Me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link href="/about" className="footer">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item> 
                            <Nav.Link href="/resume" className="footer">Resume</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            </>
        )
    }
}

export default Navigation