import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg3 from "../assets/img/project-img3.png";
import TrackVisibility from "react-on-screen";
import screen1 from "../assets/screens/screen1.png";
import screen2 from "../assets/screens/screen2.png";
import screen3 from "../assets/screens/screen3.png";
import screen4 from "../assets/screens/screen4.png";
import screen5 from "../assets/screens/screen5.png";

export const Projects = () => {
  const projects = [
    {
      title: "KickStarter Landing Page",
      description:
        "CrazyBaby Luna is an innovative Kickstarter project featuring a futuristic wireless speaker designed to deliver exceptional audio quality.",
      imgUrl: screen1,
    },
    {
      title: "React Phone Catalog",
      description: "This is a phone store website on React",
      imgUrl: screen2,
    },
    {
      title: "My Bike Landing Page",
      description: "This is a landing page for the My Bike store. ",
      imgUrl: screen3,
    },
    {
      title: "2048-game",
      description: "A popular game using pure JavaScript, HTML, and CSS",
      imgUrl: screen4,
    },
    {
      title: "Vue3-Todo-App",
      description:
        "Implemented a ToDo app using Vue 3 in Vite and API integration. Created a user-friendly interface with intuitive task management features.",
      imgUrl: screen5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInup" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Cras
                    tellus conubia luctus condimentum id dis est orci proin
                    vulputate justo taciti blandit taciti tellus metus himenaeos
                    hendrerit pellentesque lectus diam facilisi platea non nibh
                    viverra interdum sollicitudin augue ipsum amet condimentum
                    felis habitant orci finibus.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum1</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum2</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background-image-right"
      ></img>
    </section>
  );
};
