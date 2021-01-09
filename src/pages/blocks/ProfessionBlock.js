import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import SpringImageCard from "../../components/SpringImageCard";
import ImageCard from "../../components/ImageCard";
import PdfViewer from "../../components/PdfViewer";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {motion} from "framer-motion";

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

const transition = {
    duration: 0.5,
};

const titleVariants = {
    enter: { y: 0, opacity: 1, transition },
    exit: { y: -100, opacity: 0, transition },
};

const subtitleVariants = {
    enter: { x: 0, opacity: 1, transition },
    exit: { x: -100, opacity: 0, transition },
};

const experienceVariants = {
    enter: { x: 0, opacity: 1, transition },
    exit: { x: -100, opacity: 0, transition },
};

const educationVariants = {
    enter: { opacity: 1, transition },
    exit: { opacity: 0, transition },
};

const resumeVariants = {
    enter: { opacity: 1, transition },
    exit: { opacity: 0, transition },
};

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
        <motion.div initial="exit" animate="enter" exit="exit">
            <Grid className={classes.mainGrid} container spacing={5}>
                <Grid item xs='12' md='12'>
                    <motion.div variants={titleVariants}>
                        <Typography variant="h6" gutterBottom className={classes.header} color="primary">
                            Profession
                        </Typography>
                        <Divider/>
                    </motion.div>
                    <motion.div variants={{ enter: { transition: { staggerChildren: 0.4 } } }}>
                        <motion.div variants={subtitleVariants}>
                            <Typography variant="subtitle1" gutterBottom className={classes.header} color="secondary">
                                Experience
                            </Typography>
                        </motion.div>
                        {workExperience.map((post) => (
                            <motion.div variants={experienceVariants}>
                                <SpringImageCard subtitle={post[0]} description={post[1]}
                                                 display={<ImageDisplay imgSrc={post[2]} direction='column'/>}/>
                            </motion.div>
                        ))}
                    </motion.div>
                </Grid>
                <Grid item xs='5' md='5' className={classes.centeredSubpoint}>
                    <motion.div variants={subtitleVariants}>
                        <Typography variant="subtitle1" gutterBottom className={classes.header} color="secondary">
                            Education
                        </Typography>
                    </motion.div>
                    {educationExperience.map((post) => (
                        <motion.div variants={educationVariants}>
                            <ImageCard description={post[0]} imgSrc={post[1]} direction='column' imageAlignment='center'
                                       textAlignment='center'/>
                        </motion.div>
                    ))}
                </Grid>
                <Grid item xs className={classes.centeredSubpoint}>
                    <motion.div variants={subtitleVariants}>
                        <Typography variant="subtitle1" gutterBottom className={classes.header} color="secondary">
                            Resume
                        </Typography>
                    </motion.div>
                    <motion.div variants={resumeVariants}>
                        <PdfViewer src={resumeLink}/>
                    </motion.div>
                </Grid>
            </Grid>
        </motion.div>
    );
}

export default ProfessionBlock;