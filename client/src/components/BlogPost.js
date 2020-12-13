import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';
import Card from "@material-ui/core/Card";

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
    }

}));

export default function BlogPost(props) {
    const classes = useStyles();
    const { posts, title, xsNum, mdNum } = props;

    return (
        <Grid item xs={xsNum} md={mdNum}>
            <Typography variant="h6" gutterBottom className={classes.header} color="primary">
                {title}
            </Typography>
            <Divider />
            {posts.map((post) => (
                <Card className={classes.card}>
                    <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                        {post}
                    </Markdown>
                </Card>
            ))}
        </Grid>
    );
}

BlogPost.propTypes = {
    posts: PropTypes.array,
    title: PropTypes.string,
    xsNum: PropTypes.string,
    mdNum: PropTypes.string,
};