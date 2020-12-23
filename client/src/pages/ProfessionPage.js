import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import workportfolio1 from "../components/professionposts/work-experience1.md";
import workportfolio2 from "../components/professionposts/work-experience2.md";
import GridPosts from "../components/GridPosts";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: '0 auto',
        minHeight: '85vh',
    },
    mainGrid: {
        margin: '1px',
    }
}));

const phImg = new Image();
phImg.src = '/placeholder.png';

const workexperience = [[workportfolio2, phImg], [workportfolio1, phImg]];

function ProfessionPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <div className={classes.root} key={"mainContainer"}>
                <main>
                    <Grid className={classes.mainGrid} container spacing={5}>
                        <GridPosts title="Profession" posts={workexperience} xsNum="12" mdNum="12"/>
                    </Grid>
                </main>
            </div>
        </React.Fragment>
    );
}

export default ProfessionPage;