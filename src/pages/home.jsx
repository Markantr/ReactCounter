import React from "react";
import NavBar from "../components/navbar";
import Counters from "../components/counters";

function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <Counters value="4" />
      </div>
    </React.Fragment>
  );
}

export default Home;
