import React from "react";
import theme from "../common/theme";
import {IoBuild} from "react-icons/all";
import {makeStyles} from "@material-ui/core/styles";
import {motion} from "framer-motion";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
    loadIcon: {
        fontSize: '35px',
        color: 'inherit',
    },
}));

function LoadingCard() {
    const classes = useStyles();
    const loadText = 'Loading....';

    return (
        <div className={classes.paper}>
            <Grid container direction='column' justify='center' alignItems='center'>
                <Grid item xs={4}>
                    <motion.div className={classes.loadIcon}
                        animate={{
                            rotate: [0, 0, 30, -30, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                        }}
                        transition={{
                            duration: 2,
                            ease: 'easeInOut',
                            times: [0, 0.2, 0.5, 0.8, 1],
                            loop: Infinity,
                            repeatDelay: 1
                        }}
                    >
                            < IoBuild />
                    </motion.div>
                </Grid>
                <Grid item xs={4}>
                    <Typography>
                        {loadText}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default LoadingCard;