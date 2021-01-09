import React from "react";
import Grid from "@material-ui/core/Grid";
import { motion } from "framer-motion";
import RepositoryCard from "./RepositoryCard";
import Card from "@material-ui/core/Card";

function RepositoryList(props) {
    const { repos, xsNum, mdNum } = props;
    const noRepoMessage = 'No repositories loaded';

    if (!repos || repos.length === 0) {
        return (<RepositoryCard title={noRepoMessage}/>);
    }

    return (
        <Grid container spacing={4}>
            {repos.filter(repo => repo.fork === false)
                .filter(repo => repo.language != null)
                .sort(function(a, b) {
                    return b.updated_at.localeCompare(a.updated_at);
                })
                .map((repo) => (
                    <Grid item xs={xsNum} md={mdNum}>
                        <Card style={{height: '100%'}} component={motion.div} whileHover={{ scale: 1.1 }}>
                            <RepositoryCard title={repo.full_name} subTitle={repo.language} mainText={repo.description} href={repo.html_url}/>
                        </Card>
                    </Grid>
                ))}
        </Grid>
    );

}

export default RepositoryList;