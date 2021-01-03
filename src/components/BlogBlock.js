import React from "react";
import Grid from "@material-ui/core/Grid";
import BlogPosts from "./subcomponents/BlogPosts";
import Sidebar from "../components/subcomponents/Sidebar";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        margin: '1px',
    },
}));

function BlogBlock(props) {
    const classes = useStyles();
    const { sidebar, posts } = props;

    return (
        <Grid className={classes.mainGrid} container spacing={5}>
            <BlogPosts title="Blog" posts={posts} xsNum="12" mdNum="8"/>
            <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
            />
        </Grid>
    );
}

export default BlogBlock;

BlogBlock.propTypes = {
    posts: PropTypes.array,
    sidebar: PropTypes.object,
};