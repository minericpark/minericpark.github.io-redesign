import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import AboutMeBlock from "../components/AboutMeBlock";
import aboutMePost from "../components/blogposts/about-me.md";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: '0 auto',
        minHeight: '85vh',
    },
    mainGrid: {
        margin: '0px',
        paddingBottom: '5%',
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
                    <Grid className={classes.mainGrid} container spacing={5}>
                        <AboutMeBlock title="About Me" post={post} images={images} xsNum="12" mdNum="12"/>
                    </Grid>
                </main>
            </div>
        </React.Fragment>
    );
}

export default AboutPage;