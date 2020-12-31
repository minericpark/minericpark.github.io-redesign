import React from "react";
import Grid from "@material-ui/core/Grid";
import TextCard from "./TextCard";

function RepositoryList(props) {
    const { repos, xsNum, mdNum } = props;
    const noRepoMessage = 'No repositories loaded';

    if (!repos || repos.length === 0) {
        return (<TextCard subTitle={noRepoMessage}/>);
    }

    repos.sort(function(a, b) {
        return b.updated_at.localeCompare(a.updated_at);
    })

    return (
        <Grid item xs={xsNum} md={mdNum}>
            {repos.filter(repo => repo.fork == false)
                .map((repo) => (
                <TextCard subTitle={repo.name} mainText={repo.description} href={repo.html_url}/>
            ))}
        </Grid>
    );

}

export default RepositoryList;