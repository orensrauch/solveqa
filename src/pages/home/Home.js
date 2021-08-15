import React from "react";
import HomeChallenge from "../../components/Home-Challenges.component";
import { SearchBox } from "../../components/search_box/search-box.component";
//import { ChalList } from "../../components/challenge-list/challenge-list";
import "./home.css"
 


class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      challenges: [],
      searchField: ''

    }
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { challenges, searchField } = this.state
    const filteredChallenges = challenges.filter(challenge =>
      challenge.toLowerCase().includes(searchField.toLowerCase())
    )



  return (
    <div>
      <div alt="all feathured Challenges to solve" className="home-main">
        <div className="searchbox">
         <SearchBox
          placeholder='search challenges'
          handleChange={this.handleChange}
        />
      </div>
       
        <HomeChallenge challenges={filteredChallenges}/>

      </div>
    </div>
  );


  }
}

export default Home;
