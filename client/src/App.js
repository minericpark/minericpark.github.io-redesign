import React from 'react';
import './App.css';
import FrontPage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

const sections = [
    { title: 'Home', url: '/home' },
    { title: 'About Me', url: '#' },
    { title: 'Projects', url: '#' },
    { title: 'Blog', url: '#' },
    { title: 'Documents', url: '#' },
    { title: 'Test', url: '/test' },
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
    <div >
      <Header title="Minternet" sections={sections} key={"mainHeader"}/>
      <Footer social={footer.social} key={"mainFooter"}/>
    </div>
  );
}

export default App;
