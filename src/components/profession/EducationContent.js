import React from "react";
import {motion} from "framer-motion";
import PropTypes from "prop-types";
import ImageCard from "./subcomponents/ImageCard";

const transition = {
    duration: 0.5,
};

const educationVariants = {
    enter: { opacity: 1, transition },
    exit: { opacity: 0, transition },
};

function EducationContent(props) {
    const {educationExperience} = props;

    return (
        <div>
            {educationExperience.map((post) => (
                <motion.div variants={educationVariants}>
                    <ImageCard description={post[0]} imgSrc={post[1]} direction='column' imageAlignment='center'
                               textAlignment='center'/>
                </motion.div>
            ))}
        </div>
    );
}

export default EducationContent;

EducationContent.propTypes = {
    educationExperience: PropTypes.array,
};