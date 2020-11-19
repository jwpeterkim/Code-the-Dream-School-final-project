import React from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <h3 style={{ fontSize: "20px", color: "grey", textAlign: "center" }}>
            These are some current news articles we'd like to share with our job
            seekers.
          </h3>
          <p style={{ fontSize: "15px", color: "grey", textAlign: "center" }}>
            We hope you find them helpful!
          </p>

          <div className="news-cards">
            {/* News 1 */}

            <Card
              shadow={5}
              style={{ minWidth: "450", width: "300px", margin: "10px" }}
            >
              <CardTitle
                className="news-title"
                style={{
                  color: "white",
                  height: "176px",
                  opacity: "0.7",
                  background:
                    "url(https://www.ksla.com/resizer/6_-b9SPc2IyzjhqmdrbBkCfU2kA=/1200x600/arc-anglerfish-arc2-prod-raycom.s3.amazonaws.com/public/M67AK5BKGZH63KSRXM2OUZAM4I.jpg) center / cover",
                }}
              >
                Job growth stronger than expected in October
              </CardTitle>
              <CardText>
                Employment growth was better than expected in October and the
                unemployment rate fell sharply even as the U.S. faces the
                challenge of surging coronavirus cases and the impact they could
                have on the nascent economic recovery.
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://www.cnbc.com/2020/11/06/jobs-report-october-2020.html"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Read more
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/* News 2 */}
            <Card
              shadow={5}
              style={{ minWidth: "450", width: "300px", margin: "10px" }}
            >
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  opacity: "0.7",
                  background:
                    "url(https://assets.weforum.org/editor/responsive_large_webp_inOsbFyflCumnMgV-T6CNKLBhJcNTm5CZg2lAjlEXrY.webp) center / cover",
                }}
              >
                5 things to know about the future of jobs
              </CardTitle>
              <CardText>
                The COVID-19 global economic recession is deepening existing
                inequalities across global labour markets and reversing the
                gains in employment made since the Global Financial Crisis of a
                decade ago. Emerging technologies continue to reshape labour
                markets, and those trends have only accelerated with the onset
                of a new recession.
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://www.weforum.org/agenda/2020/10/5-thing-to-know-about-the-future-of-jobs/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Read more
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* News 3 */}
            <Card
              shadow={5}
              style={{ minWidth: "450", width: "300px", margin: "10px" }}
            >
              <CardTitle
                style={{
                  color: "black",
                  fontWeight: "900",
                  height: "176px",
                  opacity: "0.7",
                  background:
                    "url(https://www.pewresearch.org/wp-content/uploads/sites/8/2016/07/PJ_2016.07.07_Modern-News-Consumer_0-01.png) center / cover",
                }}
              >
                6 ways to manage burnout during a long job search
              </CardTitle>
              <CardText>
                Studies have shown that extended unemployment and
                underemployment can have a longstanding impact on a job seeker’s
                physical and mental health. CNBC Make It spoke with experts for
                guidance on how to manage feelings of burnout while job
                searching during the pandemic.
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://www.cnbc.com/2020/10/12/6-ways-to-manage-job-search-burnout.html"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Read more
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          {" "}
          <h3 style={{ fontSize: "20px", color: "grey", textAlign: "center" }}>
            There are currently no important notices.
          </h3>
          <div className="notice-cards">
            {/* notice 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background:
                    "url(https://getfive.com/wp-content/uploads/2019/08/job-searching.jpg) center / cover",
                }}
              >
                NOTICE TITLE
              </CardTitle>
              <CardText>Short Description</CardText>
              <CardActions border>
                <Button colored>Read more</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/* notice 2 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background:
                    "url(https://www.insidehighered.com/sites/default/server_files/styles/large/public/media/iStock-barber_649887300-1.jpg?itok=IyraKil3) center / cover",
                }}
              >
                NOTICE TITLE
              </CardTitle>
              <CardText>Short Description</CardText>
              <CardActions border>
                <Button colored>Read more</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Job Market News</Tab>
          <Tab>Notice</Tab>
        </Tabs>
        <section className="news-grid">
          {/* {this.toggleCategories()} */}
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default News;
