import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';
import Card from "@material-ui/core/Card";
import { motion, AnimatePresence, useCycle} from "framer-motion";

const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2
    },
    header: {
        marginTop: theme.spacing(3),
    },
    card: {
        backgroundColor: theme.palette.common.white,
        padding: theme.spacing(2.5, 2.5),
        marginTop: theme.spacing(2)
    },
    altImage: {
        alignContent: 'left',
        width: '30%',
        height: '30%',
    },
}));

function ChangingImage(props) {
    const classes = useStyles();
    const { images } = props;
    const [currentImage, setCurrentImage] = useCycle(...images);
    const IMAGE_CHANGE_TIME_MS = 5000;

    useEffect(() => {
        const timer = setTimeout(setCurrentImage, IMAGE_CHANGE_TIME_MS);
        return () => clearTimeout(timer);
    }, [currentImage, setCurrentImage]);

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div key={currentImage} className={classes.altText} initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 1.5}}>
                <img className={classes.altImage} src={currentImage} alt="Personal Image"/>
            </motion.div>
        </AnimatePresence>
    );
}

function CustomBlogPost(props) {
    const classes = useStyles();
    const { post, images, title, xsNum, mdNum } = props;

    return (
        <Grid item xs={xsNum} md={mdNum}>
            <Typography variant="h6" gutterBottom className={classes.header} color="primary">
                {title}
            </Typography>
            <Divider />
            <Card className={classes.card}>
                <ChangingImage images={images}/>
                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                    {post}
                </Markdown>
            </Card>
        </Grid>
    );
}

export default CustomBlogPost;

CustomBlogPost.propTypes = {
    post: PropTypes.string,
    images: PropTypes.array,
    title: PropTypes.string,
    xsNum: PropTypes.string,
    mdNum: PropTypes.string,
};