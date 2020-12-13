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
    title: 'Hi, welcome to my website!',
    image: 'https://source.unsplash.com/random'
};

export default function FrontPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.mainContainer} key={"mainContainer"}>
                <main>
                    <LandingFront post={mainFeaturedPost} />
                </main>
            </div>
        </React.Fragment>
    );
}