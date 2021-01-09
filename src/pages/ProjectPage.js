import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProjectBlock from "./blocks/ProjectBlock";
import githubstatistics from "../res/projectposts/githubstatistics.md";
import githubmostusedlangs from "../res/projectposts/githubmostusedlangs.md";
import hackathon1 from "../res/projectposts/hackathon1.md";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: '0 auto',
        minHeight: '90vh',
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

function ProjectPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.root} key={"mainContainer"}>
                <main>
                    <ProjectBlock githubstatistics={githubstatistics} githubmostusedlangs={githubmostusedlangs} hackathon1={hackathon1}/>
                </main>
            </div>
        </React.Fragment>
    );
}

export default ProjectPage;