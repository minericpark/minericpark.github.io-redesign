import React from "react";
import Grid from "@material-ui/core/Grid";
import { motion } from "framer-motion";
import RepositoryCard from "./subcomponents/RepositoryCard";
import Card from "@material-ui/core/Card";
import Menu from "@material-ui/core/Menu";
import WithComponentLoading from "./WithComponentLoading";
import RepositoryList from "./RepositoryList";

const transition = {
    duration: 0.5,
};

const projectVariants = {
    enter: { opacity: 1, transition },
    exit: { opacity: 0, transition },
};

function RepositoryDropdown(props) {
    const { listState } = props;
    const ListLoading = WithComponentLoading(RepositoryList);

    return (
        <ListLoading isLoading={listState.loading} repos={listState.repos} xsNum={4}/>
    );

}

export default RepositoryDropdown;