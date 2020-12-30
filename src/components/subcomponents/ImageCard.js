import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Markdown from '../Markdown';

const useStyles = makeStyles((theme) => ({
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    image: {
        width: 128,
        height: 128,
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
}));

function ImageCard(props) {
    const classes = useStyles();
    const { description, imgSrc, direction, imageAlignment, textAlignment } = props;

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={2} direction={direction} justify='center' alignItems={imageAlignment}>
                <Grid item>
                    <div className={classes.image}>
                        <img className={classes.img} alt={imgSrc.src} src={imgSrc.src} />
                    </div>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container spacing={2}>
                        <Grid item xs>
                            <Markdown key={description.substring(0, 40)}>
                                {description}
                            </Markdown>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ImageCard;

ImageCard.propTypes = {
    description: PropTypes.string,
    imgSrc: PropTypes.string,
    direction: PropTypes.string,
};