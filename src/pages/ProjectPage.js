import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProjectGrid from "./grids/ProjectGrid";
import githubstatistics from "../res/projectposts/githubstatistics.md";
import githubmostusedlangs from "../res/projectposts/githubmostusedlangs.md";
import HackTheNorth from "../res/projectposts/hackathon1.md";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: '0 auto',
        minHeight: '88.9vh',
    },
    mainGrid: {
        margin: '1px',
    },
    header: {
        marginTop: theme.spacing(3),
    },
    subheader: {
        marginTop: theme.spacing(2),
    },
    statsBox: {
        padding: theme.spacing(1),
        backgroundColor: theme.palette.grey[200],
    },
}));

const hackathons = [
    HackTheNorth,
];

function ProjectPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.root} key={"mainContainer"}>
                <main>
                    <ProjectGrid githubstatistics={githubstatistics} githubmostusedlangs={githubmostusedlangs} hackathons={hackathons}/>
                </main>
            </div>
        </React.Fragment>
    );
}

export default ProjectPage;