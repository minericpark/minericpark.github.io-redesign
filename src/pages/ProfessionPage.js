import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import subtitle1 from "../res/professionposts/work-experience1.md";
import workportfolio1 from "../res/professionposts/work-experience1-2.md";
import subtitle2 from "../res/professionposts/work-experience2.md";
import workportfolio2 from "../res/professionposts/work-experience2-2.md";
import educationportfolio1 from "../res/professionposts/education-experience.md";
import subtitle3 from "../res/professionposts/work-experience3.md";
import workportfolio3 from "../res/professionposts/work-experience3-2.md";
import subtitle4 from "../res/professionposts/work-experience4.md";
import workportfolio4 from "../res/professionposts/work-experience4-2.md";
import ProfessionGrid from "./grids/ProfessionGrid";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: '0 auto',
        minHeight: '88.9vh',
    },
}));

const workportfolioImg1 = new Image();
const workportfolioImg2 = new Image();
const workportfolioImg3 = new Image();
const workportfolioImg4 = new Image();
const educationportfolioImg1 = new Image();
workportfolioImg1.src = '/images/professions/MollaGamesLogo.png';
workportfolioImg2.src = '/images/professions/NCRCorporationLogo.png';
workportfolioImg3.src = '/images/professions/ClearSoftwareIncLogo.png'
workportfolioImg4.src = '/images/professions/ArcticWolfLogo.jpg';
educationportfolioImg1.src = '/images/professions/UniversityOfGuelphLogo.png';

const workexperience = [[subtitle4, workportfolio4, workportfolioImg4], [subtitle3, workportfolio3, workportfolioImg3], [subtitle2, workportfolio2, workportfolioImg2], [subtitle1, workportfolio1, workportfolioImg1]];
const educationexperience = [[educationportfolio1, educationportfolioImg1, '']];
const resumelink = "/documents/PersonalResume.pdf";

function ProfessionPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <div className={classes.root} key={"mainContainer"}>
                <main>
                    <ProfessionGrid educationExperience={educationexperience} workExperience={workexperience} resumeLink={resumelink}/>
                </main>
            </div>
        </React.Fragment>
    );
}

export default ProfessionPage;