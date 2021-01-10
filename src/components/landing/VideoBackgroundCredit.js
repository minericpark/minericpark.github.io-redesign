import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from "framer-motion";
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    videoBackgroundCreditLink: {
        '&:hover': {
            color: theme.palette.primary.lighterMain,
        },
    },
}));

function VideoBackgroundCredit(props) {
    const classes = useStyles();
    const { author } = props;

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.9 }} transition={{duration: 1.5}}>
            <Typography variant="caption" key={"videoBackgroundCredit"}>
                {'Background by '}
                <Link className={classes.videoBackgroundCreditLink} color='inherit' href="https://www.instagram.com/studiogoindol/?hl=en" key={"videoBackgroundCreditLink"} underline={'none'}>
                    { author }
                </Link>
            </Typography>
        </motion.div>
    );
}

export default VideoBackgroundCredit;

VideoBackgroundCredit.propTypes = {
    author: PropTypes.string,
};