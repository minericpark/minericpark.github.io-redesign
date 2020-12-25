import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';
import Card from "@material-ui/core/Card";
import { motion, AnimatePresence, useCycle} from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2,
    },
    header: {
        marginTop: theme.spacing(3),
    },
    card: {
        padding: theme.spacing(2.5, 2.5),
        marginTop: theme.spacing(2),
        display: 'flex',
    },
    altImage: {
        height: '30%',
        width: '30%',
        display: 'flex',
    },
    textDiv: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: theme.spacing(2),
    },
    leftButton: {
    },
    rightButton: {
    },
}));

function CustomBlogPost(props) {
    const classes = useStyles();
    const { post, images, title, xsNum, mdNum } = props;

    return (
        <Grid item xs={xsNum} md={mdNum}>
            <Typography variant="h6" gutterBottom className={classes.header} color="primary">
                {title}
            </Typography>
            <Divider />
            <div className={classes.card}>
                <img className={classes.altImage} src={images[0]} />
                <div className={classes.textDiv}>
                    <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                        {post}
                    </Markdown>
                </div>
            </div>
        </Grid>
    );
}

export default CustomBlogPost;

CustomBlogPost.propTypes = {
    post: PropTypes.string,
    images: PropTypes.array,
    title: PropTypes.string,
    xsNum: PropTypes.string,
    mdNum: PropTypes.string,
};