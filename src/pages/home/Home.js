import React from "react";
import homebanner from "../../assets/banner/homebanner.png";
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


    return (
      <div className="home-main">

        <div alt="page header">
          <div className="header-banner">
            <img src={homebanner} width="100%" height="320px"/>
          </div>
        </div>
        <Fade bottom duration={2000} distance="40px">
          <div className="home-btns">

            <div className="home-auto-btn">
              <form>
                <button type="submit" formaction="/homeautomation">automation</button>
              </form>
            </div>

            <div className="home-manual-btn">
              <form>
                <button type="submit" formaction="/homeautomation">manual</button>
              </form>
            </div>

          </div>
        </Fade>






      </div>

    );


  }
}

export default Home;
