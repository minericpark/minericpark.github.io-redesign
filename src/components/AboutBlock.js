import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {motion} from "framer-motion";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './subcomponents/Markdown';
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        margin: '0px',
        paddingBottom: '3%',
    },
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
        height: '100%',
        width: '110%',
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

const transition = {
    duration: 0.5,
};

const titleVariants = {
    enter: { y: 0, opacity: 1, transition },
    exit: { y: -100, opacity: 0, transition },
};

const imageVariants = {
    enter: { x: 0, opacity: 1, transition },
    exit: { x: -100, opacity: 0, transition },
};

const textVariants = {
    enter: { opacity: 1, transition },
    exit: { opacity: 0, transition },
};

function AboutBlock(props) {
    const classes = useStyles();
    const { post, images, title, xsNum, mdNum } = props;

    return (
        <motion.div initial="exit" animate="enter" exit="exit">
            <Grid className={classes.mainGrid} container spacing={5}>
                <Grid item xs={xsNum} md={mdNum}>
                    <motion.div variants={titleVariants}>
                        <Typography variant="h6" gutterBottom className={classes.header} color="primary">
                            {title}
                        </Typography>
                        <Divider />
                    </motion.div>
                    <div className={classes.card}>
                        <Grid item>
                            <motion.div variants={imageVariants}>
                                <Card>
                                    <img className={classes.altImage} src={images[0]} alt={images[0]}/>
                                </Card>
                            </motion.div>
                        </Grid>
                        <Grid item>
                            <motion.div className={classes.textDiv} variants={textVariants}>
                                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                                    {post}
                                </Markdown>
                            </motion.div>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </motion.div>
    );
}

export default AboutBlock;

AboutBlock.propTypes = {
    post: PropTypes.string,
    images: PropTypes.array,
    title: PropTypes.string,
    xsNum: PropTypes.string,
    mdNum: PropTypes.string,
};