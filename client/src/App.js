import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import BlogPage from "./pages/BlogPage";
import ProfessionPage from "./pages/ProfessionPage";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const header = {
    sections: [
        { title: 'Home', url: '/home' },
        { title: 'About Me', url: '/about' },
        { title: 'Projects', url: '/projects' },
        { title: 'Blog', url: '/blog' },
        { title: 'Profession', url: '/profession' },
    ],
};

const footer = {
    social: [
        { name: 'GitHub', icon: AiFillGithub, link: "https://github.com/minericpark" },
        { name: 'LinkedIn', icon: AiFillLinkedin, link: "https://www.linkedin.com/in/eric-p-422190128/" },
        { name: 'Mail', icon: AiFillMail, link: "mailto: epark03@uoguelph.ca" },
    ]
};

function App() {
  return (
      <React.Fragment>
          <Header title="Minternet" sections={header.sections} key={"mainHeader"}/>
          <Router>
              <Switch>
                  <Route exact path="/" component={LandingPage} />
                  <Route path="/home" component={HomePage} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/projects" component={ProjectPage} />
                  <Route path="/blog" component={BlogPage} />
                  <Route path="/profession" component={ProfessionPage} />
              </Switch>
          </Router>
          <Footer social={footer.social} key={"mainFooter"}/>
      </React.Fragment>
  );
}

export default App;