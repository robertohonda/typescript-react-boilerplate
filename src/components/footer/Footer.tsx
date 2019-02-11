import PropTypes from "prop-types";
import React from "react";

import ids from "../../translations/id/views/footer";

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";
import styles from "./styles";

const Text = ({ id }: any) => (
  <Typography color="inherit">
    <FormattedMessage id={id} />
  </Typography>
);

const Footer = ({ classes }: any) => {
  return (
    <Grid
      className={classes.root}
      container={true}
      direction="column"
      alignItems="center"
    >
      <Text id={ids.company} />
      <Text id={ids.address} />
      <Text id={ids.zipCode} />
      <Text id={ids.email} />
      <Text id={ids.phone} />
    </Grid>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
