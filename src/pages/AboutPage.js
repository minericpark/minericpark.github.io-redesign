import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AboutGrid from "./grids/AboutGrid";
import aboutMePost from "../res/blogposts/about-me.md";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: '0 auto',
        minHeight: '88.9vh',
    },
}));

const post = aboutMePost;

const images = [
    '/images/personal2.jpg',
    '/images/personal1.jpg',
];

function AboutPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.root} key={"mainContainer"}>
                <main>
                    <AboutGrid title="About Me" post={post} images={images} xsNum="12" mdNum="12"/>
                </main>
            </div>
        </React.Fragment>
    );
}

export default AboutPage;