import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LandingFront from "../components/LandingFront";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '100%',
        margin: '0 auto',
        minHeight: '85vh',
    },
}));

const mainFeaturedPost = {
    title: 'Welcome to my website.',
    image: 'https://images.pexels.com/photos/4067774/pexels-photo-4067774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    imageRef: 'Landing Page Image (By Lisa Fotios)',
};

export default function FrontPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.mainContainer} key={"mainContainer"}>
                <main>
                    <LandingFront className={classes.landingFront} post={mainFeaturedPost}/>
                </main>
            </div>
        </React.Fragment>
    );
}