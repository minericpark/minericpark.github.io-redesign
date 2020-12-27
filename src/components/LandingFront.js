import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {AnimatePresence, motion, useCycle} from "framer-motion";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    mainFrontContent: {
        position: 'relative',
    },
    videoBackground: {
        position: 'absolute',
        width: '100%',
        left: '50%',
        top: '50%',
        height: '100%',
        objectFit: 'cover',
        transform: 'translate(-50%, -50%)',
        zIndex: '-1',
    },
    mainText: {
        color: theme.palette.primary.contrastText,
        textAlign: 'center',
        margin: '5px',
    },
    altText: {

    },
    videoBackgroundCreditLink: {
        '&:hover': {
            color: theme.palette.primary.lighterMain,
        },
    },
}));

function VideoBackground(props) {
    const classes = useStyles();
    const { post } = props;

    return (
        <div key="VideoBackground">
            <video className={classes.videoBackground} id="background-video" disablePictureInPicture controlsList="nodownload" loop autoPlay muted playsInline>
                <source src={post.video} type="video/mp4"/>
                Your device does not support playing 'video/mp4' videos
            </video>
        </div>
    );
}

function ChangingTitle(props) {
    const classes = useStyles();
    const { titles } = props;
    const [currentText, setCurrentText] = useCycle(...titles);

    useEffect(() => {
        const timer = setTimeout(setCurrentText, 6000);
        return () => clearTimeout(timer);
    }, [currentText, setCurrentText]);

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div key={currentText} className={classes.altText} initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 1.5}}>
                <Typography component="h1" variant="h3" align='center'>
                    {currentText}
                </Typography>
            </motion.div>
        </AnimatePresence>
    );
}

function VideoBackgroundCredit() {
    const classes = useStyles();

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.9 }} transition={{duration: 1.5}}>
            <Typography variant="caption" key={"videoBackgroundCredit"}>
                {'Background by '}
                <Link className={classes.videoBackgroundCreditLink} color='inherit' href="https://www.instagram.com/studiogoindol/?hl=en" key={"videoBackgroundCreditLink"} underline={'none'}>
                    Studio Goindol
                </Link>
            </Typography>
        </motion.div>
    );
}

function LandingFront(props) {
    const classes = useStyles();
    const { post } = props;

    return (
        <div>
            <VideoBackground post={post}/>
            <Grid container spacing={0} align="center" justify="center" direction="column" style={{minHeight: '50vh'}}>
                <Grid item>
                    <div className={classes.mainFrontContent}>
                        <Box className={classes.mainText}>
                            <ChangingTitle titles={post.titles}/>
                            <VideoBackgroundCredit />
                        </Box>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default LandingFront;

LandingFront.propTypes = {
    post: PropTypes.object,
};