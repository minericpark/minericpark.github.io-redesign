import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import GridPost from "../components/GridPost";
import project1 from "../components/projectposts/project1.md";
import project2 from "../components/projectposts/project2.md";
import project3 from "../components/projectposts/project3.md";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '80%',
        margin: '0 auto',
        minHeight: '85vh',
    },
}));

const phImg = new Image();
phImg.src = '/placeholder.png';

const projects = [[project1, phImg], [project2, phImg], [project3, phImg]];

export default function AboutPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.mainContainer} key={"mainContainer"}>
                <main>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <GridPost title="Projects" posts={projects} xsNum="12" mdNum="12"/>
                    </Grid>
                </main>
            </div>
        </React.Fragment>
    );
}