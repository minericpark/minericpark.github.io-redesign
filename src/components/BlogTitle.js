import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {motion} from "framer-motion";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({

    header: {
        marginTop: theme.spacing(3),
    },
}));

const transition = {
    duration: 0.5,
};

const titleVariants = {
    enter: { y: 0, opacity: 1, transition },
    exit: { y: -100, opacity: 0, transition },
};

function BlogTitle(props) {
    const classes = useStyles();
    const { title } = props;

    return (
        <motion.div variants={titleVariants}>
            <Typography variant="h6" gutterBottom className={classes.header} color="primary">
                {title}
            </Typography>
            <Divider />
        </motion.div>
    );
}

export default BlogTitle;

BlogTitle.propTypes = {
    title: PropTypes.string,
};