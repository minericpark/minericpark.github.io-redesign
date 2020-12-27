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

const workportfolioImg1 = new Image();
const workportfolioImg2 = new Image();
workportfolioImg1.src = '/images/professions/MollaGamesLogo.png';
workportfolioImg2.src = '/images/professions/NCRCorporationLogo.png';

const workexperience = [[workportfolio2, workportfolioImg2], [workportfolio1, workportfolioImg1]];

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