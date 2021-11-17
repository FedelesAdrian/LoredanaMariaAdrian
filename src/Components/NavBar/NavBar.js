import React from "react";
import {
    Navbar,
    Container,
    Offcanvas,
    Nav,
    NavDropdown
} from "react-bootstrap";
import gelatoLogo from "././gelatoLogo.svg";
import basket from "././basket.svg";
import user from "././user.svg";

function NavBarComponent() {
    return (
        <Navbar expand="md">
            <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />

                <Navbar.Brand href="#" className="order-1 order-md-2 order-lg-1">
                    <img
                        width="120px"
                        height="75px"
                        className="img-responsive"
                        src={gelatoLogo}
                        alt="logo"
                    />
                </Navbar.Brand>

                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel" className="text-center align-item-center">
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <p className="text-center fw-bold text-black h4">MENU</p>
                    
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 fw-bold pe-3">
                            <NavDropdown.Divider />
                            <Nav.Link href="#" className="mx-1 pt-4 myFirstFont text-black">
                                HOME
                            </Nav.Link>
                            <Nav.Link href="#" className="mx-1 text-black">
                                GELATO
                            </Nav.Link>
                            <Nav.Link href="#" className="mx-1 text-black">
                                GELATO FOR SPECIAL NEEDS
                            </Nav.Link>
                            <Nav.Link href="#" className="mx-1 text-black">
                                DONUTS
                            </Nav.Link>
                            <Nav.Link href="#" className="mx-1 text-black">
                                DONUTS FOR SPECIAL NEEDS
                            </Nav.Link>
                        </Nav>

                        <NavDropdown.Divider className="d-sm-none" />

                        <Nav.Link
                            href="#"
                            className="d-xs-inline-flex d-sm-none text-black fw-bold"
                        >
                            <img
                                width="16px"
                                height="21px"
                                className="img-responsive m-2"
                                src={user}
                                alt="logo"
                            />
                            Account
                        </Nav.Link>

                        <NavDropdown.Divider className="d-sm-none" />

                        <Nav.Link
                            href="#"
                            className="d-xs-inline-flex d-sm-none text-black fw-bold"
                        >
                            <img
                                width="16px"
                                height="21px"
                                className="img-responsive m-2"
                                src={basket}
                                alt="logo"
                            />
                            Basket
            </Nav.Link>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>

                <Nav className="me-auto mx-3 pt-4 d-none d-md-inline-flex order-md-2 order-lg-2">
                    <Nav.Link href="#" className="mx-3">
                        Gelato
                    </Nav.Link>
                    <Nav.Link href="#" className="mx-2">
                        Gelato for special needs
                    </Nav.Link>
                    <Nav.Link href="#" className="mx-3">
                        Donuts
                    </Nav.Link>
                    <Nav.Link href="#" className="mx-2">
                        Donuts for special needs
                    </Nav.Link>
                </Nav>

                <Nav className="d-flex flex-row order-3 order-md-3 order-lg-3 ">
                    <Nav.Link href="#" className="row d-none d-sm-inline">
                        <img
                            width="24px"
                            height="24px"
                            className="img-responsive align-item-center"
                            src={user}
                            alt="logo"
                        />
                        <p className="text-center">Account</p>
                    </Nav.Link>
                    <Nav.Link href="#" className="row mx-1">
                        <img
                            width="242px"
                            height="24px"
                            className="img-responsive"
                            src={basket}
                            alt="logo"
                        />
                        <p className="text-center">Basket</p>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
export default NavBarComponent;
