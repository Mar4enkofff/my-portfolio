/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Cras tellus
                conubia luctus condimentum id dis est orci proin vulputate justo
                taciti blandit taciti tellus metus himenaeos
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>React + Redux</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>JavaScript (ES2015–2019)</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>HTML5 + CSS3</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Sass (SCSS) + BEM</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Bulma + Material UI</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Fetch + REST API</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Git/GitHub + VS Code</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Chrome Developer Tools</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>WebStorm + NPM</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>English: Upper-Intermediate</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Webpack + Trello + Jira</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
