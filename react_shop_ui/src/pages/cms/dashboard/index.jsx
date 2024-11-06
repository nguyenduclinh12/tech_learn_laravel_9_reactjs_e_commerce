import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const DashboardIndex = () => {
    // return "Hello form dashboard/index.jsx";
    return (
        <Container>
            <Row>
                <Col xs="12" className="bg-white py3 my-3 rounded-2 shadow-sm">
                    <Row>
                        <Col>
                            <h1>Dashboard</h1>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default DashboardIndex;
