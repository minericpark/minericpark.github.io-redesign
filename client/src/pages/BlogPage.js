import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import BlogPosts from "../components/BlogPosts";
import Sidebar from "../components/Sidebar";
import {makeStyles} from "@material-ui/core/styles";
import post1 from "../components/blogposts/blog-post.1.md";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: '0 auto',
        minHeight: '85vh',
    },
    mainGrid: {
        margin: '1px',
    },
}));

const sidebar = {
    title: 'What\'s up with Min?',
    description:
        'I\'m currently preparing my full redesign of my personal website',
    archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },
        { title: 'January 2020', url: '#' },
        { title: 'November 2019', url: '#' },
        { title: 'October 2019', url: '#' },
        { title: 'September 2019', url: '#' },
        { title: 'August 2019', url: '#' },
        { title: 'July 2019', url: '#' },
        { title: 'June 2019', url: '#' },
        { title: 'May 2019', url: '#' },
        { title: 'April 2019', url: '#' },
    ],
};

const posts = [post1];

function BlogPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.root} key={"mainContainer"}>
                <main>
                    <Grid className={classes.mainGrid} container spacing={5}>
                        <BlogPosts title="Test" posts={posts} xsNum="12" mdNum="8"/>
                        <Sidebar
                            title={sidebar.title}
                            description={sidebar.description}
                            archives={sidebar.archives}
                        />
                    </Grid>
                </main>
            </div>
        </React.Fragment>
    );
}

export default BlogPage;