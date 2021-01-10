import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {motion} from "framer-motion";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    header: {
        marginTop: theme.spacing(3),
    },
}));

const transition = {
    duration: 0.5,
};

const subtitleVariants = {
    enter: { x: 0, opacity: 1, transition },
    exit: { x: -100, opacity: 0, transition },
};

function PageSubtitle(props) {
    const classes = useStyles();
    const {subtitle} = props;

    return (
        <motion.div variants={subtitleVariants}>
            <Typography variant="subtitle1" gutterBottom className={classes.header} color="secondary">
                {subtitle}
            </Typography>
        </motion.div>
    );
}

export default PageSubtitle;

PageSubtitle.propTypes = {
    subtitle: PropTypes.string,
};