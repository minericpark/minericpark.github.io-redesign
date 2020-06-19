import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainFeaturedPost from "../components/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import BlogPreview from "../components/BlogPreview";
import post from "../components/blogposts/about-me.md";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '80%',
        margin: '0 auto',
        minHeight: '95vh',
    },
}));

const posts = [post];

export default function AboutPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.mainContainer} key={"mainContainer"}>
                <main>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <BlogPreview title="About Me" posts={posts} />
                    </Grid>
                </main>
            </div>
        </React.Fragment>
    );
}