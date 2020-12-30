import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FadingTextCycle from "./subcomponents/FadingTextCycle";
import VideoBackground from "./subcomponents/VideoBackground";
import { motion } from "framer-motion";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    mainFrontContent: {
        position: 'relative',
    },
    mainText: {
        color: theme.palette.primary.contrastText,
        textAlign: 'center',
        margin: '5px',
    },
    videoBackgroundCreditLink: {
        '&:hover': {
            color: theme.palette.primary.lighterMain,
        },
    },
}));

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

function LandingBlock(props) {
    const classes = useStyles();
    const { post } = props;

    return (
        <div>
            <VideoBackground videoSrc={post.video}/>
            <Grid container spacing={0} align="center" justify="center" direction="column" style={{minHeight: '50vh'}}>
                <Grid item>
                    <div className={classes.mainFrontContent}>
                        <Box className={classes.mainText}>
                            <FadingTextCycle texts={post.titles} textVariant='h3'/>
                            <VideoBackgroundCredit />
                        </Box>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default LandingBlock;

LandingBlock.propTypes = {
    post: PropTypes.object,
};