import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import RepositoryList from "../components/subcomponents/RepositoryList";
import WithComponentLoading from "../components/subcomponents/WithComponentLoading";
import Markdown from "markdown-to-jsx";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import {motion} from "framer-motion";
import LoadingCard from "./subcomponents/LoadingCard";

const useStyles = makeStyles((theme) => ({
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

const transition = {
    duration: 0.5,
};

const titleVariants = {
    enter: { y: 0, opacity: 1, transition },
    exit: { y: -100, opacity: 0, transition },
};

const subtitleVariants = {
    enter: { x: 0, opacity: 1, transition },
    exit: { x: -100, opacity: 0, transition },
};

const statisticVariants = {
    enter: { y: 0, opacity: 1, transition },
    exit: { y: -100, opacity: 0, transition },
};

function ProjectBlock(props) {
    const classes = useStyles();
    const { githubstatistics, githubmostusedlangs } = props;
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
        <motion.div initial="exit" animate="enter" exit="exit">
            <Grid className={classes.mainGrid} container spacing={5}>
                <Grid item xs={12} md={12}>
                    <motion.div variants={titleVariants}>
                        <Typography variant="h6" gutterBottom className={classes.header} color="primary">
                            {'Projects'}
                        </Typography>
                        <Divider />
                    </motion.div>
                    <motion.div variants={subtitleVariants}>
                        <Typography variant="subtitle1" gutterBottom className={classes.subheader} color="secondary">
                            GitHub Statistics
                        </Typography>
                    </motion.div>
                    <Grid container spacing={2} alignContent='center' justify='center'>
                        <motion.div variants={statisticVariants}>
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
                        </motion.div>
                    </Grid>
                    <motion.div variants={{ enter: { transition: { staggerChildren: 0.4 } } }}>
                        <motion.div variants={subtitleVariants}>
                            <Typography variant="subtitle1" gutterBottom className={classes.subheader} color="secondary">
                                GitHub Projects
                            </Typography>
                        </motion.div>
                        <ListLoading isLoading={listState.loading} repos={listState.repos} xsNum={4}/>
                    </motion.div>
                </Grid>
            </Grid>
        </motion.div>
    );

}

export default ProjectBlock;