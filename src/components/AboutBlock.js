import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        margin: '0px',
        paddingBottom: '2%',
    },
    markdown: {
        ...theme.typography.body2,
    },
    header: {
        marginTop: theme.spacing(3),
    },
    card: {
        padding: theme.spacing(2.5, 2.5),
        marginTop: theme.spacing(2),
        display: 'flex',
    },
    altImage: {
        height: '100%',
        width: '110%',
        display: 'flex',
    },
    textDiv: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: theme.spacing(2),
    },
    leftButton: {
    },
    rightButton: {
    },
}));

function AboutBlock(props) {
    const classes = useStyles();
    const { post, images, title, xsNum, mdNum } = props;

    return (
        <Grid className={classes.mainGrid} container spacing={5}>
            <Grid item xs={xsNum} md={mdNum}>
                <Typography variant="h6" gutterBottom className={classes.header} color="primary">
                    {title}
                </Typography>
                <Divider />
                <div className={classes.card}>
                    <Grid item>
                        <Card>
                            <img className={classes.altImage} src={images[0]} alt={images[0]}/>
                        </Card>
                    </Grid>
                    <Grid item>
                        <div className={classes.textDiv}>
                            <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                                {post}
                            </Markdown>
                        </div>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    );
}

export default AboutBlock;

AboutBlock.propTypes = {
    post: PropTypes.string,
    images: PropTypes.array,
    title: PropTypes.string,
    xsNum: PropTypes.string,
    mdNum: PropTypes.string,
};