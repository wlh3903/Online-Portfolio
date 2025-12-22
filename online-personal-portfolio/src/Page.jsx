import { Button, Col, Row } from "react-bootstrap";
import React from "react";


class Page extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Row>
                    <Col className="col1">
                        <h1 className="h1">
                            Color Test
                        </h1>
                    </Col>
                    <Col className="col2">
                        <h1 className="h1">
                            Col 2
                        </h1>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Page