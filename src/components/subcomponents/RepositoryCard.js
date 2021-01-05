import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {motion} from "framer-motion";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
    buttonGrid: {

    },
}));

function RepositoryCard(props) {
    const classes = useStyles();
    const { title, subTitle, mainText, direction, textAlignment, href } = props;

    return (
        <motion.div whileHover={{ scale: 1.1 }}>
            <Paper className={classes.paper}>
                <Grid container spacing={2} direction={direction} justify='center' alignItems={textAlignment}>
                    <Grid item xs={12}>
                        <Link href={href}>
                            <Typography variant="h6" gutterBottom key={'title:' + title} color="primary">
                                {title}
                            </Typography>
                        </Link>
                        <Typography variant="h7" gutterBottom key={'subtitle:' + subTitle} color="secondary">
                            {subTitle}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography key={'mainText:' + mainText} color="tertiary">
                            {mainText}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </motion.div>
    );
}

export default RepositoryCard;