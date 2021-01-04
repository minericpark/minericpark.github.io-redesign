import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    videoBackground: {
        position: 'absolute',
        width: '100%',
        left: '50%',
        top: '50%',
        height: '100%',
        objectFit: 'cover',
        transform: 'translate(-50%, -50%)',
        zIndex: '-1',
    },
}));

function VideoBackground(props) {
    const classes = useStyles();
    const { videoSrc } = props;

    return (
        <div key="VideoBackground">
            <video className={classes.videoBackground} id="background-video" disablePictureInPicture controlsList="nodownload" loop autoPlay muted playsInline>
                <source src={videoSrc} type="video/mp4"/>
                Your device does not support playing 'video/mp4' videos
            </video>
        </div>
    );
}

export default VideoBackground;

VideoBackground.propTypes = {
    videoSrc: PropTypes.string,
};