import React from "react";
import { Grid, Cell } from "react-mdl";
import main_pic from "../img/main_pic.png";

class LandingPage extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={main_pic} alt="main_pic" className="main_pic" />

            <div className="banner-text">
              <h1>Immigrant Job Search Solution</h1>
              <hr />
              <p> Job Board | Job Tracker</p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="http://linkedin.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
