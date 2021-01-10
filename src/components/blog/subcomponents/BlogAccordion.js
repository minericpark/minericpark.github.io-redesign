import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Markdown from '../../common/subcomponents/Markdown';
import Card from "@material-ui/core/Card";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Accordion from "@material-ui/core/Accordion";
import {MdExpandMore} from "react-icons/md";

const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2
    },
    card: {
        marginTop: theme.spacing(2)
    },
    repositoryAccordionSummary: {
        marginBottom: -1,
    },
}));

function BlogAccordion(props) {
    const classes = useStyles();
    const { post } = props;

    return (
        <Accordion className={classes.card}>
            <AccordionSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.repositoryAccordionSummary}>
                <Markdown className={classes.markdown} key={post.title.substring(0, 20)}>
                    {post.title}
                </Markdown>
            </AccordionSummary>
            <AccordionDetails>
                <Markdown className={classes.markdown} key={post.content.substring(0, 20)}>
                    {post.content}
                </Markdown>
            </AccordionDetails>
        </Accordion>
    );
}

export default BlogAccordion;

BlogAccordion.propTypes = {
    post: PropTypes.object,
};