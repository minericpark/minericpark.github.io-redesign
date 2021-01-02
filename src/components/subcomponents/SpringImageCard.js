import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {AnimateSharedLayout, AnimatePresence, motion} from "framer-motion";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Markdown from '../Markdown';
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
    image: {
        width: 128,
        height: 128,
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
}));

function SpringText(props) {
    const { description } = props;

    return (
        <motion.div layout initial={{ opacity: 0, y: '-100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '-100%' }} >
            <Markdown key={description.substring(0, 40)}>
                {description}
            </Markdown>
        </motion.div>
    );
}

function SpringImageCard(props) {
    const classes = useStyles();
    const { subtitle, display, description, direction, imageAlignment } = props;
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <AnimateSharedLayout>
            <Paper className={classes.paper}>
                <Grid container spacing={2} direction={direction} justify='center' alignItems={imageAlignment}>
                    <Grid item>
                        <Card>
                            <motion.div layout className={classes.image} onClick={toggleOpen} whileHover={{scale: 1.1}} whileTap={{scale: 1}}>
                                <ButtonBase>
                                    {display}
                                </ButtonBase>
                            </motion.div>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm>
                        <div>
                            <Markdown key={subtitle.substring(0, 40)}>
                                {subtitle}
                            </Markdown>
                        </div>
                        <motion.div layout initial={{ borderRadius: 10 }}>
                            <AnimatePresence>
                                {isOpen && <SpringText description={description} imageAlignment={imageAlignment} direction={direction}/>}
                            </AnimatePresence>
                        </motion.div>
                    </Grid>
                </Grid>
            </Paper>
        </AnimateSharedLayout>
    );
}

export default SpringImageCard;

SpringImageCard.propTypes = {
    description: PropTypes.string,
    imgSrc: PropTypes.string,
    direction: PropTypes.string,
};