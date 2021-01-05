import React from "react";
import Grid from "@material-ui/core/Grid";
import { motion } from "framer-motion";
import RepositoryCard from "./RepositoryCard";
import MainRepositoryCard from "./MainRepositoryCard";

const transition = {
    duration: 0.5,
};

const projectVariants = {
    enter: { opacity: 1, transition },
    exit: { opacity: 0, transition },
};

function SmallRepositoryList(props) {
    const { repos, xsNum, mdNum } = props;
    const noRepoMessage = 'No repositories loaded';
    const mainProjectsArray = [
        'DnDLevelGen',
        'minericpark.github.io-redesign',
        'HitBeat',
        'IMDbSearch'
    ];

    if (!repos || repos.length === 0) {
        return (<RepositoryCard title={noRepoMessage}/>);
    }

    return (
        <motion.div variants={{ enter: { transition: { staggerChildren: 0.3 } } }}>
            <Grid container spacing={6}>
                {repos.filter(repo => repo.fork === false)
                    .filter(repo => repo.language != null)
                    .sort(function(a, b) {
                        return b.updated_at.localeCompare(a.updated_at);
                    })
                    .filter(repo => mainProjectsArray.indexOf(repo.name) >= 0)
                    .map((repo) => (
                        <Grid item xs={xsNum} md={mdNum}>
                            <motion.div variants={projectVariants}>
                                <MainRepositoryCard title={repo.name} subTitle={repo.language} mainText={repo.description} href={repo.html_url}/>
                            </motion.div>
                        </Grid>
                    ))}
            </Grid>
        </motion.div>
    );

}

export default SmallRepositoryList;