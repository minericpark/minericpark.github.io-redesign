import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ImageCard from "../components/subcomponents/ImageCard";
import Grid from "@material-ui/core/Grid";
import workportfolio1 from "../components/professionposts/work-experience1.md";
import workportfolio2 from "../components/professionposts/work-experience2.md";
import educationportfolio1 from "../components/professionposts/education-experience.md";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import PdfViewer from "../components/subcomponents/PdfViewer";

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
    centeredSubpoint: {
        margin: '0 auto',
    },
}));

const workportfolioImg1 = new Image();
const workportfolioImg2 = new Image();
const educationportfolioImg1 = new Image();
workportfolioImg1.src = '/images/professions/MollaGamesLogo.png';
workportfolioImg2.src = '/images/professions/NCRCorporationLogo.png';
educationportfolioImg1.src = '/images/professions/UniversityOfGuelphLogo.png';

const workexperience = [[workportfolio2, workportfolioImg2], [workportfolio1, workportfolioImg1]];
const educationexperience = [[educationportfolio1, educationportfolioImg1]];

function ProfessionPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <div className={classes.root} key={"mainContainer"}>
                <main>
                    <Grid className={classes.mainGrid} container spacing={5}>
                        <Grid item xs='12' md='12'>
                            <Typography variant="h6" gutterBottom className={classes.header} color="primary">
                                Profession
                            </Typography>
                            <Divider />
                            <Grid item xs='12' md='12' className={classes.subpoint}>
                                <Typography variant="subtitle1" gutterBottom className={classes.header} color="secondary">
                                    Experience
                                </Typography>
                                {workexperience.map((post) => (
                                    <ImageCard description={post[0]} imgSrc={post[1]}/>
                                ))}
                            </Grid>
                            <Grid item xs='5' md='5' className={classes.centeredSubpoint}>
                                <Typography variant="subtitle1" gutterBottom className={classes.header} color="secondary">
                                    Education
                                </Typography>
                                {educationexperience.map((post) => (
                                    <ImageCard description={post[0]} imgSrc={post[1]} direction='column' imageAlignment='center' textAlignment='center'/>
                                ))}
                            </Grid>
                            <Grid item xs='5' md='5' className={classes.centeredSubpoint}>
                                <Typography variant="subtitle1" gutterBottom className={classes.header} color="secondary">
                                    Resume
                                </Typography>
                                <PdfViewer src="/documents/PersonalResume.pdf"/>
                            </Grid>
                        </Grid>
                    </Grid>
                </main>
            </div>
        </React.Fragment>
    );
}

export default ProfessionPage;