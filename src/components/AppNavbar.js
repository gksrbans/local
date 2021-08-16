import React, { Fragment } from "react";
import { Navbar, Container, NavbarToggler } from "reactstrap";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <Fragment>
      <Navbar  dark expand="lg" className="sticky-top">
        <Container>
          <Link to="/" className="text-dark text-decoration-none fw-bold">
            한강 직행 코인시세 현황!
          </Link>
          <NavbarToggler />

        </Container>
      </Navbar>
    </Fragment>
  );
};

export default AppNavbar;