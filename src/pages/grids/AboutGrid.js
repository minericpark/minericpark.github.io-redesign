import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import {motion} from "framer-motion";
import Grid from '@material-ui/core/Grid';
import PageTitle from "../../components/common/PageTitle";
import MainImageCard from "../../components/aboutme/MainImageCard";
import MainText from "../../components/aboutme/MainText";
import * as FirebaseStorage from "../../services/FirebaseStorage";
import WithComponentLoading from "../../components/common/WithComponentLoading";

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
    const {post, images, title, xsNum, mdNum} = props;
    const MainImageLoading = WithComponentLoading(MainImageCard);
    const [imageState, setImageState] = useState({
        loading: true,
        images: null,
    });

    useEffect(() => {
        setImageState({ loading: true, images: null });
        FirebaseStorage.getImages('personal', images).then((response) => {
            console.log(response);
            const allImages = response;
            setImageState({loading: false, images: allImages});
        });
    }, [setImageState]);

    return (
        <motion.div initial="exit" animate="enter" exit="exit">
            <Grid className={classes.mainGrid} container spacing={5}>
                <Grid item xs={xsNum} md={mdNum}>
                    <PageTitle title={title}/>
                    <div className={classes.card}>
                        <Grid item>
                            <MainImageLoading isLoading={imageState.loading} images={imageState.images}/>
                        </Grid>
                        <Grid item>
                            <MainText post={post}/>
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