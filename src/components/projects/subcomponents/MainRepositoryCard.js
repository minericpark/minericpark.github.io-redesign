import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {motion} from "framer-motion";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { GiCube } from "react-icons/gi";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
    paper: {
        height: '100%'
    },
    buttonGrid: {

    },
    iconGrid: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    loadIcon: {
        fontSize: '35px',
        textAlign: 'center',
        margin: '0 auto',
        color: theme.palette.secondary.main
    },
    spacer: {
        justifyContent: "space-between"
    },
}));

function MainRepositoryCard(props) {
    const classes = useStyles();
    const { title, subTitle, mainText, href } = props;

    return (
        <Grid item xs component={Card} className={classes.paper}>
            <Grid container component={CardContent} spacing={2} justify='center'>
                <Grid item xs={1} className={classes.iconGrid}>
                    <motion.div className={classes.loadIcon}
                                animate={{
                                    scale: [1, 1.1, 1.1, 1, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    loop: Infinity,
                                    repeatDelay: 3
                                }}
                    >
                        < GiCube/>
                    </motion.div>
                </Grid>
                <Grid item xs={11}>
                    <Typography variant="h6" gutterBottom key={'title:' + title} color="primary">
                        {title}
                    </Typography>
                    <Typography variant="h7" gutterBottom key={'subtitle:' + subTitle} color="secondary">
                        {subTitle}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography key={'mainText:' + mainText} color="tertiary">
                        {mainText}
                    </Typography>
                </Grid>
                <Grid item xs={12} textAlign='center' className={classes.buttonGrid}>
                    <Button href={href} variant="contained" color="primary" disableElevation>
                        Repository
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default MainRepositoryCard;