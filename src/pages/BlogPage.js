import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import BlogPosts from "../components/BlogPosts";
import Sidebar from "../components/Sidebar";
import {makeStyles} from "@material-ui/core/styles";
import post1 from "../components/blogposts/blog-post.1.md";
import post2 from "../components/blogposts/blog-post.2.md";
import post3 from "../components/blogposts/blog-post.3.md";

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
        'I\'m currently redesigning my personal website and preparing for school!',
    archives: [
        { title: 'Website Redesign Repository', url: 'https://github.com/minericpark/minericpark.github.io-redesign' },
    ],
};

const posts = [post3, post2, post1];

function BlogPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.root} key={"mainContainer"}>
                <main>
                    <Grid className={classes.mainGrid} container spacing={5}>
                        <BlogPosts title="Blog" posts={posts} xsNum="12" mdNum="8"/>
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