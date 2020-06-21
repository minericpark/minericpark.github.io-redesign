import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import MainFeaturedPost from '../components/MainFeaturedPost';
import BlogPost from '../components/BlogPost';
import Sidebar from '../components/Sidebar';
import post1 from '../components/blogposts/blog-post.1.md.js';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
    },
    mainContainer: {
        width: '80%',
        margin: '0 auto',
        minHeight: '95vh',
    },
}));

const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
};

const posts = [post1];

const sidebar = {
    title: 'About',
    description:
        'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
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

export default function FrontPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.mainContainer} key={"mainContainer"}>
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <BlogPost title="Test" posts={posts} height="12" width="8"/>
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