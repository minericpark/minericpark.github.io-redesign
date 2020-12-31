import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import githubstatistics from "../components/projectposts/githubstatistics.md";
import githubmostusedlangs from "../components/projectposts/githubmostusedlangs.md";
import axios from "axios";
import RepositoryList from "../components/subcomponents/RepositoryList";
import WithComponentLoading from "../components/subcomponents/WithComponentLoading";
import Markdown from "markdown-to-jsx";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Sidebar from "../components/Sidebar";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: '0 auto',
        minHeight: '85vh',
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
    const ListLoading = WithComponentLoading(RepositoryList);
    const [listState, setListState] = useState({
        loading: false,
        repos: null,
    });

    useEffect(() => {
        setListState({ loading: true, repos: null });
        const githubUser = 'minericpark';
        const githubApiUrl = 'https://api.github.com/users/' + githubUser + '/repos';
        axios.get(githubApiUrl).then((repos) => {
            const allRepos = repos.data;
            setListState({ loading: false, repos: allRepos })
        });
    }, [setListState]);

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.root} key={"mainContainer"}>
                <main>
                    <Grid className={classes.mainGrid} container spacing={5}>
                        <Grid item xs={12} md={12}>
                            <Typography variant="h6" gutterBottom className={classes.header} color="primary">
                                {'Projects'}
                            </Typography>
                            <Divider />
                            <Typography variant="subtitle1" gutterBottom className={classes.subheader} color="secondary">
                                GitHub Statistics
                            </Typography>
                                <Grid container spacing={2} alignContent='center' justify='center'>
                                    <Paper className={classes.statsBox} elevation={0}>
                                        <Grid item>
                                            <Markdown>
                                                {githubstatistics}
                                            </Markdown>
                                        </Grid>
                                        <Grid item>
                                            <Markdown>
                                                {githubmostusedlangs}
                                            </Markdown>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            <Typography variant="subtitle1" gutterBottom className={classes.subheader} color="secondary">
                                GitHub Projects
                            </Typography>
                            <ListLoading isLoading={listState.loading} repos={listState.repos} />
                        </Grid>
                    </Grid>
                </main>
            </div>
        </React.Fragment>
    );
}

export default ProjectPage;