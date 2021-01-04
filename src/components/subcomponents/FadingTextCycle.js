import {AnimatePresence, motion, useCycle} from "framer-motion";
import React, {useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    altText: {

    },
}));

function FadingTextCycle(props) {
    const classes = useStyles();
    const { texts, textVariant } = props;
    const [currentText, setCurrentText] = useCycle(...texts);

    useEffect(() => {
        const timer = setTimeout(setCurrentText, 6000);
        return () => clearTimeout(timer);
    }, [currentText, setCurrentText]);

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div key={currentText} className={classes.altText} initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 1.5}}>
                <Typography component="h1" variant={textVariant} align='center'>
                    {currentText}
                </Typography>
            </motion.div>
        </AnimatePresence>
    );
}

export default FadingTextCycle;

FadingTextCycle.propTypes = {
    texts: PropTypes.array,
    textVariant: PropTypes.string,
};