

import React, { Component } from "react";
import "./ChallengeCard.css";
import { Fade } from "react-reveal";

class ChallengeCard extends Component {
  render() {
    const challenge = this.props.challenge;

    return (
      <Fade bottom duration={2000} distance="20px">

        <div className="chal-card">
          <div className="content">
            <a
              href={challenge.challenge_link}
              target=""
              rel="noopener noreferrer"
            >
              <div className="content-overlay"></div>
              <div
                className="chal-header"

              >
                <img
                  className="logo_img"
                  src={challenge.imageSrc}
                  alt={challenge.alt_name}
                />
              </div>
              <div className="content-details fadeIn-top">
                <h3 className="content-title">
                  {challenge.title}
                </h3>
              </div>
            </a>
          </div>
          <div className="chal-body">
            <h2 className="chal-body-title">
              {challenge.title}
            </h2>
            <h3
              className="chal-body-subtitle"

            >
              {challenge.subtitle}
            </h3>

          </div>
        </div>
      </Fade>
    );
  }
}

export default ChallengeCard;

