import React from "react";
import Grid from "@material-ui/core/Grid";
import TextCard from "./TextCard";

function RepositoryList(props) {
    const { repos, xsNum, mdNum } = props;
    const noRepoMessage = 'No repositories loaded';

    if (!repos || repos.length === 0) {
        return (<TextCard subTitle={noRepoMessage}/>);
    }

    return (
        <Grid container spacing={3}>
            {repos.filter(repo => repo.fork === false)
                .filter(repo => repo.language != null)
                .sort(function(a, b) {
                    return b.updated_at.localeCompare(a.updated_at);
                })
                .map((repo) => (
                    <Grid item xs={xsNum} md={mdNum}>
                        <TextCard title={repo.full_name} subTitle={repo.language} mainText={repo.description} href={repo.html_url}/>
                    </Grid>
            ))}
        </Grid>
    );

}

export default RepositoryList;