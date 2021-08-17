import React, { Component } from "react";
import "./Challenges.css";
import { Fade } from "react-reveal";
import { challenges } from "../../allData";
import ChallengeCard from "../../components/challenge_card/ChallengeCard"


/**
 * This method used to present 
 * all the challenges cards at the home page
 * 
 * method includes filter search function over each
 * challenge from allData file to enable search field by name
 */
class Challenges extends Component {
    render() {
        const queryFilter = this.props.query 
        return (
            <div className="main" id="challenges">
                <div className="chal-header-div">
                    <Fade bottom duration={2000} distance="20px">
                        <h1 className="chal-header">
                            {challenges.title}
                        </h1>
                    </Fade>
                </div>
                <div className="chal-body-div">
                    {challenges.challenges.filter((challenge) => challenge.title.toLowerCase().includes(queryFilter)).map((chal) => {
                        return <ChallengeCard challenge={chal} />;
                    })}
                </div>
            </div>
        );
    }
}

export default Challenges;
