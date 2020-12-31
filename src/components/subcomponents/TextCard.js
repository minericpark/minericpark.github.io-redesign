import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
    mainCard: {
        width: '80%',
        margin: '0 auto',
        minHeight: '85vh',
    },
}));

function TextCard(props) {
    const classes = useStyles();
    const { title, subTitle, mainText, direction, textAlignment, href } = props;

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={2} direction={direction} justify='center' alignItems={textAlignment}>
                <Grid item md={3}>
                    <Link href={href}>
                        <Typography variant="h6" gutterBottom key={'title:' + title} color="primary">
                            {title}
                        </Typography>
                    </Link>
                    <Typography variant="h7" gutterBottom key={'subtitle:' + subTitle} color="secondary">
                        {subTitle}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container spacing={2}>
                        <Grid item xs>
                            <Typography key={'mainText:' + mainText} color="tertiary">
                                {mainText}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TextCard;