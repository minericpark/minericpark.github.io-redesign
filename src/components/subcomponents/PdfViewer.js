import React, {useState} from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
}));

function PdfViewer(props) {
    const { src } = props;
    const classes = useStyles();
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={2} justify='center' alignItems='center'>
                <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber}/>
                </Document>
            </Grid>
        </Paper>
    );

}

export default PdfViewer;

PdfViewer.propTypes = {
    src: PropTypes.string,
};