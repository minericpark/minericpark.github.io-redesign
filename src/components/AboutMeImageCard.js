import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {motion} from "framer-motion";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
    altImage: {
        height: '100%',
        width: '110%',
        display: 'flex',
    },

}));

const transition = {
    duration: 0.5,
};

const imageVariants = {
    enter: { x: 0, opacity: 1, transition },
    exit: { x: -100, opacity: 0, transition },
};

function AboutMeImageCard(props) {
    const classes = useStyles();
    const { images } = props;

    return (
        <motion.div variants={imageVariants}>
            <Card>
                <img className={classes.altImage} src={images[0]} alt={images[0]}/>
            </Card>
        </motion.div>
    );
}

export default AboutMeImageCard;

AboutMeImageCard.propTypes = {
    images: PropTypes.array,
};