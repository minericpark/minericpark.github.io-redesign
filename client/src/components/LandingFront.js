import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fade from "@material-ui/core/Fade";
import Link from "@material-ui/core/Link";
import {motion} from "framer-motion";
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
    videoBackgroundCredit: {
        color: theme.palette.primary.contrastText,
        opacity: '50%',
        textAlign: 'center',
        margin: '5px',
    },
    videoBackgroundCreditLink: {
        '&:hover': {
            color: theme.palette.primary.lighterMain,
        },
    },
}));

export default function LandingFront(props) {
    const classes = useStyles();
    const { post } = props;

    return (
        <div>
            <VideoBackground post={post}/>
            <Grid container spacing={0} align="center" justify="center" direction="column" style={{minHeight: '50vh'}}>
                <Grid item>
                    <div className={classes.mainFrontContent}>
                        <Fade in timeout={{ enter: 2200, exit: 1000 }}>
                            <Box className={classes.videoBackgroundCredit}>
                                <Typography component="h1" variant="h3" align='center'>
                                    {post.title}
                                </Typography>
                                <Typography component="h2" variant="body2" key={"videoBackgroundCredit"}>
                                    {'Background by '}
                                    <Link className={classes.videoBackgroundCreditLink} color='inherit' href="https://www.instagram.com/studiogoindol/?hl=en" key={"videoBackgroundCreditLink"} underline={'none'}>
                                        Studio Goindol
                                    </Link>
                                </Typography>
                            </Box>
                        </Fade>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

function VideoBackground(props) {
    const classes = useStyles();
    const { post } = props;

    return (
        <div>
            <video className={classes.videoBackground} id="background-video" loop autoPlay muted playsInline disablePictureInPicture>
                <source src={post.video} type="video/mp4"/>
                Your device does not support playing 'video/mp4' videos
            </video>
        </div>
    );
}

LandingFront.propTypes = {
    post: PropTypes.object,
};

/**
 <Paper className={classes.landingFront} style={{ backgroundImage: `url(${post.image})` }}>
 <Grid container spacing={0} align="center" justify="center" direction="column" style={{minHeight: '50vh'}}>
 <Grid item>
 <div className={classes.mainFrontContent}>
 <Fade in timeout={{ enter: 2200, exit: 1000 }}>
 <Typography component="h1" variant="h3" color="inherit" align='center'>
 {post.title}
 </Typography>
 </Fade>
 </div>
 </Grid>
 </Grid>
 </Paper>
 */