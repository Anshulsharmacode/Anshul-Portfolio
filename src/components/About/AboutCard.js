import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anshul Sharma </span>
            from <span className="purple"> Indore</span>
            <br />I Study <span className="purple">Biomedical engineer .</span>
            <br />I have complete my secondary education from{" "}
            <span className="purple">Saraswati Shishu Mandir</span>
            <br />
            <br />
            Apart from engineering, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Astrology
            </li>
            <li className="about-activity">
              <ImPointRight /> Freelancing
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
