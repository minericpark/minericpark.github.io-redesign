import React from "react";
import Grid from "@material-ui/core/Grid";
import BlogPosts from "../../components/blog/BlogPosts";
import Sidebar from "../../components/blog/Sidebar";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {motion} from "framer-motion";
import PageTitle from "../../components/common/PageTitle";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        margin: '1px',
    },
    header: {
        marginTop: theme.spacing(3),
    },
}));

function BlogGrid(props) {
    const classes = useStyles();
    const { sidebar, posts } = props;

    return (
        <motion.div initial="exit" animate="enter" exit="exit">
            <Grid className={classes.mainGrid} container spacing={5}>
                <Grid item xs='12' md='8'>
                    <PageTitle title={'Blog'} />
                    <BlogPosts posts={posts}/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Sidebar
                        archiveTitle={sidebar.archivetitle}
                        title={sidebar.title}
                        description={sidebar.description}
                        archives={sidebar.archives}
                    />
                </Grid>
            </Grid>
        </motion.div>
    );
}

export default BlogGrid;

BlogGrid.propTypes = {
    posts: PropTypes.array,
    sidebar: PropTypes.object,
};