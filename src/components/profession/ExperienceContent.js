import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {motion} from "framer-motion";
import PropTypes from "prop-types";
import SpringImageCard from "./subcomponents/SpringImageCard";

const useStyles = makeStyles((theme) => ({
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const transition = {
    duration: 0.5,
};

const experienceVariants = {
    enter: { x: 0, opacity: 1, transition },
    exit: { x: -100, opacity: 0, transition },
};

function ExperienceContent(props) {
    const {workExperience} = props;

    function ImageDisplay(props) {
        const classes = useStyles();
        const { imgSrc } = props;

        return (
            <img className={classes.img} alt={imgSrc.src} src={imgSrc.src} />
        );
    }

    return (
        <motion.div variants={{ enter: { transition: { staggerChildren: 0.4 } } }}>
            {workExperience.map((post) => (
                <motion.div variants={experienceVariants}>
                    <SpringImageCard subtitle={post[0]} description={post[1]}
                                     display={<ImageDisplay imgSrc={post[2]} direction='column'/>}/>
                </motion.div>
            ))}
        </motion.div>
    );
}

export default ExperienceContent;

ExperienceContent.propTypes = {
    workExperience: PropTypes.array,
};