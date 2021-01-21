import React from "react";
import AllRepositoryList from "./AllRepositoryList";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { MdExpandMore } from 'react-icons/md';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {motion} from "framer-motion";

const useStyles = makeStyles((theme) => ({
    repositoryAccordionSummary: {
        marginBottom: -1,
    },
}));

const transition = {
    duration: 0.5,
};

const accordionVariants = {
    enter: { opacity: 1, transition },
    exit: { opacity: 0, transition },
};

function RepositoryAccordion(props) {
    const { allRepos } = props;
    const classes = useStyles();

    return (
        <motion.div variants={accordionVariants}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<MdExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.repositoryAccordionSummary} >
                    <Typography variant="subtitle1" gutterBottom>
                        GitHub Projects
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <AllRepositoryList repos={allRepos} xsNum={4}/>
                </AccordionDetails>
            </Accordion>
        </motion.div>
    );

}

export default RepositoryAccordion;