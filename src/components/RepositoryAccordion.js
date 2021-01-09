import React from "react";
import WithComponentLoading from "./WithComponentLoading";
import RepositoryList from "./subcomponents/RepositoryList";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { MdExpandMore } from 'react-icons/md';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    repositoryAccordionSummary: {
        marginBottom: -1,
    },
}));

function RepositoryAccordion(props) {
    const { listState } = props;
    const ListLoading = WithComponentLoading(RepositoryList);
    const classes = useStyles();

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.repositoryAccordionSummary}
            >
                <Typography variant="subtitle1" gutterBottom>
                    GitHub Projects
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <ListLoading isLoading={listState.loading} repos={listState.repos} xsNum={4}/>
            </AccordionDetails>
        </Accordion>
    );

}

export default RepositoryAccordion;