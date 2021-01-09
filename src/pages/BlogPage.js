import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {makeStyles} from "@material-ui/core/styles";
import post1 from "../res/blogposts/blog-post.1.md";
import post2 from "../res/blogposts/blog-post.2.md";
import post3 from "../res/blogposts/blog-post.3.md";
import BlogBlock from "./blocks/BlogBlock";

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
        'I\'m currently patching my newly hosted personal website and preparing for my first hackathon, HTN2020!',
    archivetitle:
        'Miscellaneous Archives',
    archives: [
        { title: 'Empty' },
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