import React from "react";
// import { Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import "../styles/cms/style.scss";
import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navmenu from "../components/Navmenu";


const CmsLayout = () => {
    return (
        <Container>
            <Navmenu></Navmenu>
            <Outlet></Outlet>
        </Container>
    );
};

export default CmsLayout;
