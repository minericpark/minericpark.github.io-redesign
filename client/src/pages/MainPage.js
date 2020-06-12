import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Header from '../components/Header';
import MainFeaturedPost from '../components/MainFeaturedPost';
import BlogPreview from '../components/BlogPreview';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import post1 from '../components/blogposts/blog-post.1.md.js';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    mainContainer: {
        width: '80%',
        margin: '0 auto',
    },
}));

const sections = [
    { title: 'Home', url: '#' },
    { title: 'About Me', url: '#' },
    { title: 'Projects', url: '#' },
    { title: 'Blog', url: '#' },
    { title: 'Documents', url: '#' },
];

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

const footer = {
    social: [
        { name: 'GitHub', icon: GitHubIcon, link: "https://github.com/minericpark" },
        { name: 'LinkedIn', icon: LinkedInIcon, link: "https://www.linkedin.com/in/eric-p-422190128/" },
        { name: 'Facebook', icon: FacebookIcon, link: "https://www.facebook.com/minericpark/" },
    ],
};

export default function Blog() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.mainContainer} key={"mainContainer"}>
                <Header title="Minternet" sections={sections} key={"mainHeader"}/>
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <BlogPreview title="Test" posts={posts} />
                        <Sidebar
                            title={sidebar.title}
                            description={sidebar.description}
                            archives={sidebar.archives}
                        />
                    </Grid>
                </main>
            </div>
            <Footer social={footer.social} key={"mainFooter"}/>
        </React.Fragment>
    );
}