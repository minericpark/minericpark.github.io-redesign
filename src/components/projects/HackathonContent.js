import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Markdown from "markdown-to-jsx";
import Paper from "@material-ui/core/Paper";
import {motion} from "framer-motion";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    hackathonBox: {
        padding: theme.spacing(1),
        backgroundColor: theme.palette.grey[200],
    },
}));

const transition = {
    duration: 0.5,
};

const hackathonVariants = {
    enter: { y: 0, opacity: 1, transition },
    exit: { y: -100, opacity: 0, transition },
};

function HackathonContent(props) {
    const classes = useStyles();
    const { hackathon1 } = props;

    return (
        <motion.div variants={hackathonVariants}>
            <Paper className={classes.hackathonBox} elevation={0}>
                <Grid item>
                    <Markdown>
                        {hackathon1}
                    </Markdown>
                </Grid>
            </Paper>
        </motion.div>
    );

}

export default HackathonContent;

HackathonContent.propTypes = {
    hackathon1: PropTypes.object,
};
