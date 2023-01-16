import React from 'react';
import './Body.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cardPic1 from '../assets/g3.jpg';
import cardPic2 from '../assets/istockphoto-1190632382-612x612.jpg';
import cardPic3 from '../assets/g2.jpg';
import cardPic4 from '../assets/outdoor.jpeg';

function body() {
  return (
    <div className="pageBody">
      <h2 className="bodyHeader ">Horizon In Daily Living</h2>
      <div className="livingTypes">
      <button type="button" className="btn btn-outline-success bg-success text-white">Independent Living</button>
      <button type="button" className="btn btn-outline-light text-dark">Assisted Living</button>
      </div>
      <div className="groupLivingCards">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cardPic1} />
          <Card.Body>
            <Card.Title>Dine In & Gather</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="light">Get details!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cardPic2} />
          <Card.Body>
            <Card.Title>Club & Activity</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="light">Read more!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cardPic3} />
          <Card.Body>
            <Card.Title>Routine Checkups</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="success">Get details!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cardPic4} />
          <Card.Body>
            <Card.Title>Outdoor activities</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="light">Read more!</Button>
          </Card.Body>
        </Card>
      </div>
      
    </div>
  );
}

export default body;
