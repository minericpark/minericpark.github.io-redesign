import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
    landingFront: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(1),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '90vh',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFrontContent: {
        position: 'relative',
    },
}));

export default function LandingFront(props) {
    const classes = useStyles();
    const { post } = props;

    return (
        <Paper className={classes.landingFront} style={{ backgroundImage: `url(${post.image})` }}>
            <div className={classes.overlay} />
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
    );
}

LandingFront.propTypes = {
    post: PropTypes.object,
};