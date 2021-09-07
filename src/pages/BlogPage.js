import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {makeStyles} from "@material-ui/core/styles";
import post1 from "../res/blogposts/blog-post.1.md";
import posttitle1 from "../res/blogposts/blog-post-title.1.md";
import post2 from "../res/blogposts/blog-post.2.md";
import posttitle2 from "../res/blogposts/blog-post-title.2.md";
import post3 from "../res/blogposts/blog-post.3.md";
import posttitle3 from "../res/blogposts/blog-post-title.3.md";
import post4 from "../res/blogposts/blog-post.4.md";
import posttitle4 from "../res/blogposts/blog-post-title.4.md";
import BlogGrid from "./grids/BlogGrid";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: '0 auto',
        minHeight: '88.9vh',
    },
    mainGrid: {
        margin: '1px',
    },
}));

const sidebarElements = {
    title: 'What\'s up with Min?',
    description:
        'I\'m currently in school studying hard and still thinking up and working on some projects',
    archivetitle:
        'Miscellaneous Archives',
    archives: [
        { title: 'Empty' },
    ],
};

const posts = [
    {
        title: posttitle4,
        content: post4,
    },
    {
        title: posttitle3,
        content: post3,
    },
    {
        title: posttitle2,
        content: post2,
    },
    {
        title: posttitle1,
        content: post1,
    },
];

function BlogPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.root} key={"mainContainer"}>
                <main>
                    <BlogGrid posts={posts} sidebar={sidebarElements}/>
                </main>
            </div>
        </React.Fragment>
    );
}

export default BlogPage;