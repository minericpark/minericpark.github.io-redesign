import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Markdown from '../../common/subcomponents/Markdown';

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
    imageCard: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
}));

function ImageCard(props) {
    const classes = useStyles();
    const { description, imgSrc, direction, imageAlignment } = props;

    return (
        <div className={classes.imageCard}>
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
        </div>
    );
}

export default ImageCard;

ImageCard.propTypes = {
    description: PropTypes.string,
    imgSrc: PropTypes.string,
    direction: PropTypes.string,
};