import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">WEB DEVELOPER</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Domain:</strong> Backend Developer
                    <br />
                    <strong>Role:</strong> Coder
                    <br />
                    <strong>Description:</strong> Build Resfull API nodejs and
                    mongodb, search system with elasticsearch, build map with
                    deckgl and reactjs.
                    <br />
                    <strong>Technology:</strong> nodejs, mongodb and reactjs
                    <br />
                    <strong>Duration:</strong> 2020 - Present
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
