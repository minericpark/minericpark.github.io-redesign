import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {motion} from "framer-motion";
import Markdown from "../subcomponents/Markdown";

const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2,
    },
    textDiv: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: theme.spacing(2),
    },
}));

const transition = {
    duration: 0.5,
};

const textVariants = {
    enter: { opacity: 1, transition },
    exit: { opacity: 0, transition },
};

function MainText(props) {
    const classes = useStyles();
    const { post } = props;

    return (
        <motion.div className={classes.textDiv} variants={textVariants}>
            <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                {post}
            </Markdown>
        </motion.div>
    );
}

export default MainText;

MainText.propTypes = {
    post: PropTypes.string,
};