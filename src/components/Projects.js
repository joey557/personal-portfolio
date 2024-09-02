import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { cardList } from "./CardData";
import { Row, Col } from "react-bootstrap";
import "../App.css";

export default function Projects() {
  return (
    <div className="projects-container">
      <h3 style={{ textAlign: "center", margin: "100px" }}>My Projects</h3>

      <Row>
        {cardList.map((card) => (
          <Col
            sm={10}
            md={6}
            key={card.title}
            style={{ padding: "10px", marginBottom: "400px" }}
          >
            <CardItem
              key={card.title}
              imageUrl={card.imgURL}
              title={card.title}
              text={card.text}
              link={card.link}
              tags={card.tags}
              title2={card.title2}
              description={card.description}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

function CardItem({ imageUrl, title, text, tags, link, title2, description }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Card className="custom-card">
            <Card.Img
              variant="top"
              src={imageUrl}
              style={{ minHeight: "16rem", maxHeight: "16rem" }}
            />
            <Card.Body className="card-body">
              <Card.Title>{title}</Card.Title>
              <div>
                <Card.Text>{text}</Card.Text>
                <div
                  className="link-style"
                  onClick={handleLinkClick} // 确保点击链接时不会翻转卡片
                  dangerouslySetInnerHTML={{ __html: link }}
                />
                {tags.map((tag) => (
                  <span key={tag} className="badge">
                    {tag}
                  </span>
                ))}
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="flip-card-back">
          <Card className="custom-card">
            <Card.Body className="card-body">
              <Card.Title>{title2}</Card.Title>
              <Card.Text dangerouslySetInnerHTML={{ __html: description }} />
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
