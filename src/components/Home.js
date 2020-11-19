import React from "react";
import main_pic2 from "../img/main_pic2.jpg";

class Home extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>
          <strong style={{ color: "grey" }}>Did you know?</strong>
        </h1>
        <p style={{ fontSize: "17px", color: "grey" }}>
          <strong>
            About 47% of recently arriaved immigrants to the United States have
            a college degrees or higher!{" "}
          </strong>
        </p>

        <strong>Our Mission</strong>
        <p
          style={{
            width: "450px",
            margin: "auto",
            paddingTop: "0.5em",
          }}
        >
          Eliminate employment barriers for skilled immigrants and refugees, and
          integrate this population into the professional U.S. workforce.
        </p>

        <img
          src={main_pic2}
          alt="main_pic2"
          style={{ height: "300px", paddingTop: "3em" }}
        />
        <h3>
          <strong style={{ fontSize: "27px", color: "grey" }}>
            Job Matching Service for Immigrants and Recruiters
          </strong>
        </h3>

        <strong>Our Goal</strong>
        <p
          style={{
            width: "550px",
            margin: "auto",
            paddingTop: "0.5em",
            paddingBottom: "5em",
          }}
        >
          We want to support immigrants experiencing difficulties finding the
          right opportunities and assist recruiters in looking for the right
          talent while including diversity.
        </p>
      </div>
    );
  }
}

export default Home;
