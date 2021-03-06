import React, {useState} from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

function PdfViewer(props) {
    const { src } = props;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <Grid container spacing={2} justify='center' alignItems='center'>
            <Card>
                <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber}/>
                </Document>
            </Card>
        </Grid>
    );

}

export default PdfViewer;

PdfViewer.propTypes = {
    src: PropTypes.string,
};