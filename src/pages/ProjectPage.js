import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import GridPosts from "../components/GridPosts";
import project1 from "../components/projectposts/project1.md";
import project2 from "../components/projectposts/project2.md";
import project3 from "../components/projectposts/project3.md";

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

const projects = [[project1, phImg], [project2, phImg], [project3, phImg]];

function ProjectPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.root} key={"mainContainer"}>
                <main>
                    <Grid className={classes.mainGrid} container spacing={5}>
                        <GridPosts title="Projects" posts={projects} xsNum="12" mdNum="12"/>
                    </Grid>
                </main>
            </div>
        </React.Fragment>
    );
}

export default ProjectPage;