import React, { Component } from "react";
import "./Challenges.css";
import { Fade } from "react-reveal";
import { challenges } from "../../allData";
//import { SearchBox } from "../../components/search_box/search-box.component";
import MediaCardComponent from "../../components/challenge_card/ChallengeCard";

class Challenges extends Component {
    render() {
        //  const challenge = this.props.challenge;
        const queryFilter = this.props.query 
        return (
            <div className="main" id="certs">
                <div className="chal-header-div">
                    <Fade bottom duration={2000} distance="20px">
                        <h1 className="chal-header">
                            {challenges.title}
                        </h1>
                    </Fade>
                </div>
                <div className="chal-body-div">
                    {challenges.challenges.filter((challenge) => challenge.title.toLowerCase().includes(queryFilter)).map((chal) => {
                        return <MediaCardComponent challenge={chal} />;
                    })}
                </div>
            </div>
        );
    }
}

export default Challenges;
