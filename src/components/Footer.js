/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import githublogo from "../assets/img/githublogo.png";
import myLogo from "../assets/img/my_logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col sm={6} className="footer_logo text-center text-sm-start">
            <Navbar.Brand href="#">
              <img src={myLogo} alt="Logo" className="my-logo" />
            </Navbar.Brand>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/oleksandr-marchenko-0205a8307/">
                <img src={navIcon1} alt="linkedin adress" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100008751103247&locale=uk_UA">
                <img src={navIcon2} alt="facebook adress" />
              </a>
              <a href="https://github.com/Mar4enkofff">
                <img src={githublogo} alt="githublogo" />
              </a>
            </div>
            <p>CopyRight 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
