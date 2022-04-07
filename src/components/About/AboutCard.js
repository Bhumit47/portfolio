import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Bhumit Mor </span>
            from <span className="purple"> Haryana India.</span>
            <br />I am pre-final year student in Chitkara University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Workout
            </li>
            <li className="about-activity">
              <ImPointRight /> Cinema
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "One repays a teacher badly, if one always remains nothing but a pupil."{" "}
          </p>
          <footer className="blockquote-footer">Friedrich Nietzche</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
