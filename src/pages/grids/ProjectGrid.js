import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import WithComponentLoading from "../../components/common/WithComponentLoading";
import {motion} from "framer-motion";
import MainRepositoryList from "../../components/projects/MainRepositoryList";
import RepositoryAccordion from "../../components/projects/RepositoryAccordion";
import PageTitle from "../../components/common/PageTitle";
import PageSubtitle from "../../components/common/PageSubtitle";
import GithubStatistics from "../../components/projects/GithubStatistic";
import PropTypes from "prop-types";
import HackathonContent from "../../components/projects/HackathonContent";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        margin: '1px',
    },
}));

function ProjectGrid(props) {
    const classes = useStyles();
    const { githubstatistics, githubmostusedlangs, hackathons } = props;
    const MainListLoading = WithComponentLoading(MainRepositoryList);
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
                    <PageTitle title={'Projects'}/>
                    <PageSubtitle subtitle={'GitHub Statistics'}/>
                    <Grid container spacing={2} alignContent='center' justify='center'>
                        <GithubStatistics githubstatistics={githubstatistics} githubmostusedlangs={githubmostusedlangs} />
                    </Grid>
                    <motion.div variants={{ enter: { transition: { staggerChildren: 0.4 } } }}>
                        <PageSubtitle subtitle={'Main Projects'}/>
                        <MainListLoading isLoading={listState.loading} repos={listState.repos} xsNum={6}/>
                    </motion.div>
                    <PageSubtitle subtitle={'Hackathon Attendance'}/>
                    <Grid container spacing={2} alignContent='center' justify='center'>
                        <HackathonContent hackathons={hackathons} />
                    </Grid>
                    <PageSubtitle subtitle={'All Projects'}/>
                    <RepositoryAccordion allRepos={listState.repos}/>
                </Grid>
            </Grid>
        </motion.div>
    );

}

export default ProjectGrid;

ProjectGrid.propTypes = {
    githubstatistics: PropTypes.object,
    githubmostusedlangs: PropTypes.object,
    hackathon1: PropTypes.object,
};
