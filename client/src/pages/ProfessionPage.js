import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import workportfolio1 from "../components/professionposts/work-experience1.md";
import workportfolio2 from "../components/professionposts/work-experience2.md";
import GridPost from "../components/GridPost";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '80%',
        margin: '0 auto',
        minHeight: '85vh',
    },
}));

const phImg = new Image();
phImg.src = '/placeholder.png';

const workexperience = [[workportfolio1, phImg], [workportfolio2, phImg]];

export default function ProfessionPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <div className={classes.mainContainer} key={"mainContainer"}>
                <main>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <GridPost title="Profession" posts={workexperience} xsNum="12" mdNum="12"/>
                    </Grid>
                </main>
            </div>
        </React.Fragment>
    );
}