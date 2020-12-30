import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import SpringImageCard from "./subcomponents/SpringImageCard";
import ImageCard from "./subcomponents/ImageCard";
import PdfViewer from "./subcomponents/PdfViewer";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: '0 auto',
        minHeight: '85vh',
    },
    header: {
        marginTop: theme.spacing(3),
    },
    mainGrid: {
        margin: '1px',
    },
    subpoint: {
        marginLeft: theme.spacing(3),
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    centeredSubpoint: {
        margin: '0 auto',
    },
}));

function ImageDisplay(props) {
    const classes = useStyles();
    const { imgSrc } = props;

    return (
        <img className={classes.img} alt={imgSrc.src} src={imgSrc.src} />
    );
}

function ProfessionBlock(props) {
    const classes = useStyles();
    const {workExperience, educationExperience, resumeLink} = props;

    return (
        <Grid className={classes.mainGrid} container spacing={5}>
            <Grid item xs='12' md='12'>
                <Typography variant="h6" gutterBottom className={classes.header} color="primary">
                    Profession
                </Typography>
                <Divider/>
                <Typography variant="subtitle1" gutterBottom className={classes.header} color="secondary">
                    Experience
                </Typography>
                {workExperience.map((post) => (
                    <SpringImageCard subtitle={post[0]} description={post[1]}
                                     display={<ImageDisplay imgSrc={post[2]} direction='column'/>}/>
                ))}
            </Grid>
            <Grid item xs='5' md='5' className={classes.centeredSubpoint}>
                <Typography variant="subtitle1" gutterBottom className={classes.header} color="secondary">
                    Education
                </Typography>
                {educationExperience.map((post) => (
                    <ImageCard description={post[0]} imgSrc={post[1]} direction='column' imageAlignment='center'
                               textAlignment='center'/>
                ))}
            </Grid>
            <Grid item xs='5' md='5' className={classes.centeredSubpoint}>
                <Typography variant="subtitle1" gutterBottom className={classes.header} color="secondary">
                    Resume
                </Typography>
                <PdfViewer src={resumeLink}/>
            </Grid>
        </Grid>
    );
}

export default ProfessionBlock;