import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from "@material-ui/core/Paper";
import Markdown from './Markdown';

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
    header: {
        marginTop: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
}));

function ProjectCard(props) {
    const classes = useStyles();
    const { projectDesc, imgSrc } = props;

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="ProjectImg" src={imgSrc.src} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Markdown key={projectDesc.substring(0, 40)}>
                                {projectDesc}
                            </Markdown>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default function GridPost(props) {
    const classes = useStyles();
    const { posts, title, xsNum, mdNum } = props;

    return (
        <Grid item xs={xsNum} md={mdNum}>
            <Typography variant="h6" gutterBottom className={classes.header} color="primary">
                {title}
            </Typography>
            <Divider />
            {posts.map((post) => (
                <ProjectCard projectDesc={post[0]} imgSrc={post[1]}/>
            ))}
        </Grid>
    );
}

GridPost.propTypes = {
    posts: PropTypes.array,
    title: PropTypes.string,
    xsNum: PropTypes.string,
    mdNum: PropTypes.string,
};