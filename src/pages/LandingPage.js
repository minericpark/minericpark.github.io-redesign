import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LandingBlock from "../components/LandingBlock";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '0 auto',
        minHeight: '89vh',
    },
}));

const titles = [
    'Welcome to my website.',
    'This background is nice, right?',
    'This webpage is still under development',
    'Helloo',
];

const mainFeaturedPost = {
    titles: titles,
    image: 'https://images.pexels.com/photos/4067774/pexels-photo-4067774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    imageRef: 'Landing Page Image (By Lisa Fotios)',
    video: '/videos/studiogoindol(itsokayevenifyoucantseetheend).mp4',
    videoRef: 'Landing Page Video (By Studio Goindol)',
};

function LandingPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.root} key={"mainContainer"}>
                <main>
                    <LandingBlock post={mainFeaturedPost}/>
                </main>
            </div>
        </React.Fragment>
    );
}

export default LandingPage;