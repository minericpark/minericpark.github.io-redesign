import React from "react";
import Grid from "@material-ui/core/Grid";
import { motion } from "framer-motion";
import RepositoryCard from "./RepositoryCard";

const transition = {
    duration: 0.5,
};

const projectVariants = {
    enter: { opacity: 1, transition },
    exit: { opacity: 0, transition },
};

function RepositoryList(props) {
    const { repos, xsNum, mdNum } = props;
    const noRepoMessage = 'No repositories loaded';

    if (!repos || repos.length === 0) {
        return (<RepositoryCard subTitle={noRepoMessage}/>);
    }

    return (
        <motion.div variants={{ enter: { transition: { staggerChildren: 0.3 } } }}>
            <Grid container spacing={3}>
                {repos.filter(repo => repo.fork === false)
                    .filter(repo => repo.language != null)
                    .sort(function(a, b) {
                        return b.updated_at.localeCompare(a.updated_at);
                    })
                    .map((repo) => (
                        <Grid item xs={xsNum} md={mdNum}>
                            <motion.div variants={projectVariants}>
                                <RepositoryCard title={repo.full_name} subTitle={repo.language} mainText={repo.description} href={repo.html_url}/>
                            </motion.div>
                        </Grid>
                ))}
            </Grid>
        </motion.div>
    );

}

export default RepositoryList;