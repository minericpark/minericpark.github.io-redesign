import React from "react";
import Grid from "@material-ui/core/Grid";
import {motion} from "framer-motion";
import {IconContext} from "react-icons";
import Link from "@material-ui/core/Link";
import PropTypes from "prop-types";

function SocialsCard(props) {
    const { social, gridDirection } = props;

    return (
        <React.Fragment>
            <Grid container direction={gridDirection} justify="flex-start" alignItems="center" spacing={1} key={"socials"}>
                {social.map((network) => (
                    <Grid item key={"socials" + network.name}>
                        <motion.div whileHover={{ scale: 1.3 }}>
                            <IconContext.Provider value={{ style: {fontSize: '23px', color: 'inherit'}}}>
                                <Link display="block" variant="body1" href={network.link} key={network.name}>
                                    <network.icon />
                                </Link>
                            </IconContext.Provider>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    );
}

export default SocialsCard;

SocialsCard.propTypes = {
    social: PropTypes.array,
    gridDirection: PropTypes.string,
};