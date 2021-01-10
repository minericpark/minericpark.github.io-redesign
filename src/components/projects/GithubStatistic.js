import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Markdown from "markdown-to-jsx";
import Paper from "@material-ui/core/Paper";
import {motion} from "framer-motion";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    statsBox: {
        padding: theme.spacing(1),
        backgroundColor: theme.palette.grey[200],
    },
}));

const transition = {
    duration: 0.5,
};

const statisticVariants = {
    enter: { y: 0, opacity: 1, transition },
    exit: { y: -100, opacity: 0, transition },
};

function GithubStatistics(props) {
    const classes = useStyles();
    const { githubstatistics, githubmostusedlangs } = props;

    return (
        <motion.div variants={statisticVariants}>
            <Paper className={classes.statsBox} elevation={0}>
                <Grid item>
                    <Markdown>
                        {githubstatistics}
                    </Markdown>
                </Grid>
                <Grid item>
                    <Markdown>
                        {githubmostusedlangs}
                    </Markdown>
                </Grid>
            </Paper>
        </motion.div>
    );
}

export default GithubStatistics;

GithubStatistics.propTypes = {
    githubstatistics: PropTypes.object,
    githubmostusedlangs: PropTypes.object,
};