import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ImageCard from "../components/subcomponents/ImageCard";
import Grid from "@material-ui/core/Grid";
import workportfolio1 from "../components/professionposts/work-experience1.md";
import workportfolio2 from "../components/professionposts/work-experience2.md";
import GridPosts from "../components/GridPosts";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

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
}));

const workportfolioImg1 = new Image();
const workportfolioImg2 = new Image();
workportfolioImg1.src = '/images/professions/MollaGamesLogo.png';
workportfolioImg2.src = '/images/professions/NCRCorporationLogo.png';

const workexperience = [[workportfolio2, workportfolioImg2], [workportfolio1, workportfolioImg1]];

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
                            {workexperience.map((post) => (
                                <ImageCard description={post[0]} imgSrc={post[1]}/>
                            ))}
                        </Grid>
                        <GridPosts title="Core Languages" posts={workexperience} xsNum="12" mdNum="12"/>
                        <GridPosts title="Library Knowledge" posts={workexperience} xsNum="12" mdNum="12"/>
                        <GridPosts title="Education" posts={workexperience} xsNum="12" mdNum="12"/>
                    </Grid>
                </main>
            </div>
        </React.Fragment>
    );
}

export default ProfessionPage;