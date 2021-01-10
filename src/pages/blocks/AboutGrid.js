import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {motion} from "framer-motion";
import Grid from '@material-ui/core/Grid';
import PageTitle from "../../components/PageTitle";
import AboutMeImageCard from "../../components/AboutMeImageCard";
import AboutMeText from "../../components/AboutMeText";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        margin: '0px',
    },
    card: {
        padding: theme.spacing(2.5, 2.5),
        marginTop: theme.spacing(2),
        display: 'flex',
    },
}));

function AboutGrid(props) {
    const classes = useStyles();
    const { post, images, title, xsNum, mdNum } = props;

    return (
        <motion.div initial="exit" animate="enter" exit="exit">
            <Grid className={classes.mainGrid} container spacing={5}>
                <Grid item xs={xsNum} md={mdNum}>
                    <PageTitle title={title} />
                    <div className={classes.card}>
                        <Grid item>
                            <AboutMeImageCard images={images}/>
                        </Grid>
                        <Grid item>
                            <AboutMeText post={post} />
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </motion.div>
    );
}

export default AboutGrid;

AboutGrid.propTypes = {
    post: PropTypes.string,
    images: PropTypes.array,
    title: PropTypes.string,
    xsNum: PropTypes.string,
    mdNum: PropTypes.string,
};