import React from "react";
import NavBar from "../components/navbar";
import BasicTree from "../components/tree";

function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container mt-2">
        <BasicTree />
      </div>
    </React.Fragment>
  );
}

export default Home;
