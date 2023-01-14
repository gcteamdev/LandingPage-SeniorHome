import React from 'react';
import './Banner.css';
import bg from '../assets/bg.png';
import stickers from '../assets/Group 320.png';
import group from "../assets/b1.jpg";
import quality from"../assets/Group 331.png";
import review from "../assets/Group 332.png";

function banner() {
  return (
    <>
      <div className="bannerPage">
        <div>
          <div className="mt-5 p-5 banner-decription">
            <h4>Exprience Active</h4>
            <h1> Senior Living</h1>
            <h4>at Lake Dela!</h4>
            <br></br>
            <button
              type="button"
              className="btn btn-outline-light p-3 text-success contact-btn"
            >
              Contact Us
            </button>
            <br></br>
            <br></br>
            <img src={stickers} alt="licences" />
          </div>
        </div>
        <div>
        <img className= "bannerPic"src={group} alt="group" />
        </div>
        <img className="review" src={review} alt='review'/>
        <img className="quality" src={quality} alt='quality'/>
        <img className="bg" src={bg} alt="banner bg" />
      </div>
    </>
  );
}

export default banner;
