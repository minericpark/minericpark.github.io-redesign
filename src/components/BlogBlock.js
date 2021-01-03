import React from "react";
import Grid from "@material-ui/core/Grid";
import BlogPosts from "./subcomponents/BlogPosts";
import Sidebar from "../components/subcomponents/Sidebar";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {motion} from "framer-motion";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        margin: '1px',
    },
    header: {
        marginTop: theme.spacing(3),
    },
}));

const transition = {
    duration: 0.5,
};

const titleVariants = {
    enter: { y: 0, opacity: 1, transition },
    exit: { y: -100, opacity: 0, transition },
};

function BlogBlock(props) {
    const classes = useStyles();
    const { sidebar, posts } = props;

    return (
        <motion.div initial="exit" animate="enter" exit="exit">
            <Grid className={classes.mainGrid} container spacing={5}>
                <Grid item xs='12' md='8'>
                    <Typography variant="h6" gutterBottom className={classes.header} color="primary">
                        {'Blog'}
                    </Typography>
                    <Divider />
                    <BlogPosts title="Blog" posts={posts} xsNum="12" mdNum="8"/>
                </Grid>
                <Sidebar
                    title={sidebar.title}
                    description={sidebar.description}
                    archives={sidebar.archives}
                />
            </Grid>
        </motion.div>
    );
}

export default BlogBlock;

BlogBlock.propTypes = {
    posts: PropTypes.array,
    sidebar: PropTypes.object,
};