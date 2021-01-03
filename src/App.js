import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import BlogPage from "./pages/BlogPage";
import ProfessionPage from "./pages/ProfessionPage";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {AnimatePresence} from "framer-motion";

const header = {
    sections: [
        { title: 'Blog', url: '/blog' },
        { title: 'Projects', url: '/projects' },
        { title: 'Profession', url: '/profession' },
        { title: 'About Me', url: '/about' },
    ],
};

const footer = {
    social: [
        { name: 'GitHub', icon: AiFillGithub, link: "https://github.com/minericpark" },
        { name: 'LinkedIn', icon: AiFillLinkedin, link: "https://www.linkedin.com/in/eric-p-422190128/" },
        { name: 'Mail', icon: AiFillMail, link: "mailto: epark03@uoguelph.ca" },
    ],
};

function App() {

    return (
        <React.Fragment>
            <Router>
                <Header title="Minternet" sections={header.sections} key={"mainHeader"}/>
                <AnimatePresence exitBeforeEnter initial={false}>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/projects" component={ProjectPage} />
                        <Route path="/blog" component={BlogPage} />
                        <Route path="/profession" component={ProfessionPage} />
                    </Switch>
                </AnimatePresence>
                <Footer social={footer.social} key={"mainFooter"}/>
            </Router>
        </React.Fragment>
    );
}

export default App;