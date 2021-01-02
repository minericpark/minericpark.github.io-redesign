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
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom key={'title:' + title} color="primary">
                        <Link href={href}>
                            {title}
                        </Link>
                    </Typography>
                    <Typography variant="h7" gutterBottom key={'subtitle:' + subTitle} color="secondary">
                        {subTitle}
                    </Typography>
                    <Typography key={'mainText:' + mainText} color="tertiary">
                        {mainText}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TextCard;