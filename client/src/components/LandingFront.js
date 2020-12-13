import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    landingFront: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(2),
        backgroundImage: 'url()',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh'
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
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

export default function LandingFront(props) {
    const classes = useStyles();
    const { post } = props;

    return (
        <Paper className={classes.landingFront} style={{ backgroundImage: `url(${post.image})` }}>
            {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
            <div className={classes.overlay} />
            <Grid container>
                <Grid item>
                    <div className={classes.mainFrontContent}>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {post.title}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}

LandingFront.propTypes = {
    post: PropTypes.object,
};