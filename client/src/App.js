import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import FrontPage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import BlogPage from "./pages/BlogPage";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const sections = [
    { title: 'Home', url: '/' },
    { title: 'About Me', url: '/about' },
    { title: 'Projects', url: '/projects' },
    { title: 'Blog', url: '/blog' },
    { title: 'Documents', url: '#' },
];

const footer = {
    social: [
        { name: 'GitHub', icon: GitHubIcon, link: "https://github.com/minericpark" },
        { name: 'LinkedIn', icon: LinkedInIcon, link: "https://www.linkedin.com/in/eric-p-422190128/" },
        { name: 'Facebook', icon: FacebookIcon, link: "https://www.facebook.com/minericpark/" },
    ],
};

function App() {
  return (
      <React.Fragment>
          <Router>
              <Header title="Minternet" sections={sections} key={"mainHeader"}/>
              <Switch>
                  <Route exact path="/" component={FrontPage} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/projects" component={ProjectPage} />
                  <Route path="/blog" component={BlogPage} />
              </Switch>
              <Footer social={footer.social} key={"mainFooter"}/>
          </Router>
      </React.Fragment>
  );
}

export default App;