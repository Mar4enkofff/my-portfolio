import { Row, Container, Col } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Frontend Developer", "React Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Oleksandr Marchenko `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Cras tellus
              conubia luctus condimentum id dis est orci proin vulputate justo
              taciti blandit taciti tellus metus himenaeos hendrerit
              pellentesque lectus diam facilisi platea non nibh viverra interdum
              sollicitudin augue ipsum amet condimentum felis habitant orci
              finibus.
            </p>
            <button onClick={() => console.log("connect2")}>
              Let's connect
              <BsArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
