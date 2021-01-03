import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AboutBlock from "../components/AboutBlock";
import aboutMePost from "../components/blogposts/about-me.md";
import {AnimatePresence, motion} from "framer-motion";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: '0 auto',
        minHeight: '85vh',
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
            <main>
                <motion.div className={classes.root} key={"mainContainer"}
                            initial="initial"
                            animate="enter"
                            exit="exit">
                    <AboutBlock title="About Me" post={post} images={images} xsNum="12" mdNum="12"/>
                </motion.div>
            </main>
        </React.Fragment>
    );
}

export default AboutPage;