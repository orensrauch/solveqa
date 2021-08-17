import React from "react";
//import HomeChallenge from "../../components/Home-Challenges.component";
import { SearchBox } from "../../components/search_box/search-box.component";
import Challenges from "../../containers/challenges/Challenges";
import { Fade } from "react-reveal";
//import "../../App.css";
import "./home.css";



class Home extends React.Component {

  constructor() {
    super();

    this.state = {
      // challenges: [],
      searchField: ''

    }
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { searchField } = this.state
    
    return (
      <div className="home-main">

        <div alt="page header">

        </div>
        <Fade bottom duration={2000} distance="40px">
          <div alt="all challenges search field" className="searchbox">

            <SearchBox
              placeholder='search challenges'
              handleChange={this.handleChange}
            />

          </div>
        </Fade>
        
        <div alt="all challenges cards">
          <Challenges query={searchField}/>
        </div>


      </div>

    );


  }
}

export default Home;
