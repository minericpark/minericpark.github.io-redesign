import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {makeStyles} from "@material-ui/core/styles";
import post1 from "../components/blogposts/blog-post.1.md";
import post2 from "../components/blogposts/blog-post.2.md";
import post3 from "../components/blogposts/blog-post.3.md";
import BlogBlock from "../components/BlogBlock";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: '0 auto',
        minHeight: '90vh',
    },
    mainGrid: {
        margin: '1px',
    },
}));

const sidebarElements = {
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
                    <BlogBlock posts={posts} sidebar={sidebarElements}/>
                </main>
            </div>
        </React.Fragment>
    );
}

export default BlogPage;