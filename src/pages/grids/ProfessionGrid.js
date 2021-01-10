import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import SpringImageCard from "../../components/profession/subcomponents/SpringImageCard";
import ImageCard from "../../components/profession/subcomponents/ImageCard";
import PdfViewer from "../../components/profession/subcomponents/PdfViewer";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {motion} from "framer-motion";
import PageTitle from "../../components/common/PageTitle";
import PageSubtitle from "../../components/common/PageSubtitle";
import ResumePdfCard from "../../components/profession/ResumePdfCard";
import EducationContent from "../../components/profession/EducationContent";
import ExperienceContent from "../../components/profession/ExperienceContent";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        margin: '1px',
    },
    centeredSubpoint: {
        margin: '0 auto',
    },
}));

function ProfessionGrid(props) {
    const classes = useStyles();
    const {workExperience, educationExperience, resumeLink} = props;

    return (
        <motion.div initial="exit" animate="enter" exit="exit">
            <Grid className={classes.mainGrid} container spacing={5}>
                <Grid item xs='12' md='12'>
                    <PageTitle title={'Experience'}/>
                    <ExperienceContent workExperience={workExperience} />
                </Grid>
                <Grid item xs='5' md='5' className={classes.centeredSubpoint}>
                    <PageSubtitle subtitle={'Education'} />
                    <EducationContent educationExperience={educationExperience} />
                </Grid>
                <Grid item xs className={classes.centeredSubpoint}>
                    <PageSubtitle subtitle={'Resume'}/>
                    <ResumePdfCard src={resumeLink}/>
                </Grid>
            </Grid>
        </motion.div>
    );
}

export default ProfessionGrid;

ProfessionGrid.propTypes = {
    workExperience: PropTypes.array,
    educationExperience: PropTypes.array,
    resumeLink: PropTypes.string,
};