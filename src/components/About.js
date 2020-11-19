import React from "react";
import main_pic from "../img/main_pic.png";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row" style={{ textAlign: "center", paddingTop: "5em" }}>
          <div className="col-md-5" style={{ paddingLeft: "4em" }}>
            <img
              src={main_pic}
              alt="main_pic"
              style={{ height: "250px", paddingTop: "1em" }}
            />
            <h3>
              <strong style={{ color: "grey" }}>
                Job Matching Service for Immigrants and Recruiters
              </strong>
            </h3>

            <strong>
              We help you succeed in finding the right opportunities and talent!
            </strong>
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "0.5em",
              }}
            >
              Job Board | Profiles
            </p>
          </div>
          <div className="col-md-7">
            <div style={{ color: "grey" }}>
              <h3>
                <strong>How to use this website</strong>
              </h3>
              <strong>Job Board</strong>
              <hr />
              <p
                style={{
                  width: "450px",
                  margin: "auto",
                  paddingTop: "0.5em",
                }}
              >
                This page is for recruiters to share current job openings.
                Please submit position title, employer, location and a simple
                job description.
              </p>
              <p
                style={{
                  width: "450px",
                  margin: "auto",
                  paddingTop: "1em",
                  paddingBottom: "2em",
                }}
              >
                *Job seekers should contact us to be considered for any listed
                positions and for more information.
              </p>
              <strong>Profiles</strong>
              <hr />
              <p
                style={{
                  width: "450px",
                  margin: "auto",
                  paddingTop: "0.5em",
                }}
              >
                <p>
                  This page is for job seekers to share their profiles. Please
                  submit your name, skills, location preference and professional
                  summary.
                </p>
                <p>
                  *Recruiters should contact us for further details regarding
                  job seekers.
                </p>
              </p>
            </div>
            <p
              style={{
                paddingTop: "3em",
              }}
            >
              Do you think you found a good match? Contact us for more
              information! <a href="mailto:jwpeterkim@gmail.com">Click here</a>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
