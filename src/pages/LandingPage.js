import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LandingGrid from "./grids/LandingGrid";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '0 auto',
        minHeight: '88.9vh',
    },
}));

const titles = [
    'Welcome to my website.',
    'This background is nice, right?',
    'This webpage is still under development',
    'Helloo',
];

const videoBackground = {
    titles: titles,
    video: 'https://github.com/minericpark/minericpark.github.io-redesign/blob/master/public/videos/studiogoindol(itsokayevenifyoucantseetheend).mp4?raw=true',
    videoRef: 'Landing Page Video (By Studio Goindol)',
};

function LandingPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.root} key={"mainContainer"}>
                <main>
                    <LandingGrid videoBackground={videoBackground}/>
                </main>
            </div>
        </React.Fragment>
    );
}

export default LandingPage;