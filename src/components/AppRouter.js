import React from "react";
import JobBoard from "./JobBoard";
import Profile from "./Profile";
import About from "./About";
import Contact from "./Contact";
import News from "./News";
import JobTracker from "./JobTracker";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AppRouter = ({ handleLogout, user }) => {
  return (
    <section className="home">
      <Router>
        <nav>
          <h3>Job Matching for Immigrants</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/jobBoard">Jobs</Link>
          <Link to="/profile">Profiles</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>

          <button onClick={handleLogout}>Logout</button>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
          <Route path="/jobBoard">
            <JobBoard user={user} />
          </Route>
          <Route path="/profile">
            <Profile user={user} />
          </Route>
          <Route path="/jobTracker" component={JobTracker} />
        </Switch>
      </Router>
    </section>
  );
};

export default AppRouter;
