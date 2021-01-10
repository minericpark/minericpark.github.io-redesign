import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FadingTextCycle from "../../components/landing/FadingTextCycle";
import VideoBackground from "../../components/landing/VideoBackground";
import { motion } from "framer-motion";
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import VideoBackgroundCredit from "../../components/landing/VideoBackgroundCredit";

const useStyles = makeStyles((theme) => ({
    mainFrontContent: {
        position: 'relative',
    },
    mainText: {
        color: theme.palette.primary.contrastText,
        textAlign: 'center',
        margin: '5px',
    },
}));

const transition = {
    duration: 0.5,
};

const backgroundVariants = {
    enter: { opacity: 1, transition },
    exit: { opacity: 0, transition },
};

function LandingGrid(props) {
    const classes = useStyles();
    const { videoBackground } = props;

    return (
        <motion.div initial="exit" animate="enter" exit="exit" variants={backgroundVariants}>
            <VideoBackground videoSrc={videoBackground.video}/>
            <Grid container spacing={0} align="center" justify="center" direction="column" style={{minHeight: '50vh'}}>
                <Grid item>
                    <div className={classes.mainFrontContent}>
                        <Box className={classes.mainText}>
                            <FadingTextCycle texts={videoBackground.titles} textVariant='h3'/>
                            <VideoBackgroundCredit author={'Studio Goindol'}/>
                        </Box>
                    </div>
                </Grid>
            </Grid>
        </motion.div>
    );
}

export default LandingGrid;

LandingGrid.propTypes = {
    videoBackground: PropTypes.object,
};