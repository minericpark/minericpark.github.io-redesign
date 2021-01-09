import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from "../ImageCard";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    image: {
        width: 128,
        height: 128,
    },
    header: {
        marginTop: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
    mainGrid: {
        margin: '1px',
    }
}));

function GridPosts(props) {
    const classes = useStyles();
    const { posts, title, xsNum, mdNum, direction } = props;

    return (
        <Grid className={classes.mainGrid} container spacing={5}>
            <Grid item xs={xsNum} md={mdNum}>
                <Typography variant="h6" gutterBottom className={classes.header} color="primary">
                    {title}
                </Typography>
                <Divider />
                {posts.map((post) => (
                    <ImageCard description={post[0]} imgSrc={post[1]} direction={direction}/>
                ))}
            </Grid>
        </Grid>
    );
}

export default GridPosts;

GridPosts.propTypes = {
    posts: PropTypes.array,
    title: PropTypes.string,
    xsNum: PropTypes.string,
    mdNum: PropTypes.string,
    direction: PropTypes.string,
};