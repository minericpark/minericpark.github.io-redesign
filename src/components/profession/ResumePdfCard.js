import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import {motion} from "framer-motion";
import PdfViewer from "./subcomponents/PdfViewer";

const useStyles = makeStyles((theme) => ({
    pdfviewer: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
}));

const transition = {
    duration: 0.5,
};

const resumeVariants = {
    enter: { opacity: 1, transition },
    exit: { opacity: 0, transition },
};

function ResumePdfCard(props) {
    const { src } = props;
    const classes = useStyles();

    return (
        <motion.div className={classes.pdfviewer} variants={resumeVariants}>
            <PdfViewer src={src}/>
        </motion.div>
    );

}

export default ResumePdfCard;

ResumePdfCard.propTypes = {
    src: PropTypes.string,
};