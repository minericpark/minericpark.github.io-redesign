import React, {useState} from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
    pdfviewer: {
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
        <div className={classes.pdfviewer}>
            <Grid container spacing={2} justify='center' alignItems='center'>
                <Card>
                    <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber}/>
                    </Document>
                </Card>
            </Grid>
        </div>
    );

}

export default PdfViewer;

PdfViewer.propTypes = {
    src: PropTypes.string,
};