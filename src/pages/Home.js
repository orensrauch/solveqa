import React from "react";
import HomeChallenge from "../components/Home-Challenges.component";
import SimpleBottomNavigation from "../components/footer";

function Home() {
  return (
    <div>
      <div alt="all feathured Challenges to solve">
        <HomeChallenge />
        <SimpleBottomNavigation/>
      </div>
    </div>
  );
}

export default Home;
