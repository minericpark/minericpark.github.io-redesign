import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import BlogPost from "../components/BlogPost";
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
                    <BlogPost title="About Me" posts={posts} height="12" width="12"/>
                </main>
            </div>
        </React.Fragment>
    );
}