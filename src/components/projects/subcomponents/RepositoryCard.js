import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    paper: {
        height: '100%'
    },
    buttonGrid: {

    },
}));

function RepositoryCard(props) {
    const classes = useStyles();
    const { title, subTitle, mainText, href } = props;

    return (
        <Grid item xs component={Card} className={classes.paper}>
            <CardContent>
                <Link href={href}>
                    <Typography variant="h6" gutterBottom key={'title:' + title} color="primary">
                        {title}
                    </Typography>
                </Link>
                <Typography variant="body2" gutterBottom key={'subtitle:' + subTitle} color="secondary">
                    {subTitle}
                </Typography>
                <Typography variant="body1" key={'mainText:' + mainText} color="tertiary">
                    {mainText}
                </Typography>
            </CardContent>
        </Grid>
    );
}

export default RepositoryCard;