import React from "react";

import ids from "../../translations/id/views/footer";

import {Grid, Typography} from "@material-ui/core";
import {withStyles, WithStyles} from "@material-ui/core/styles";
import {FormattedMessage} from "react-intl";
import styles, {Styles} from "./styles";

interface IFooterProps extends WithStyles<Styles> {}

const Footer: React.SFC<IFooterProps> = ({classes}) => {
  return (
    <Grid className={classes.root} container direction="column" alignItems="center">
      <Text id={ids.company} />
      <Text id={ids.address} />
      <Text id={ids.zipCode} />
      <Text id={ids.email} />
      <Text id={ids.phone} />
    </Grid>
  );
};

const Text = ({id}: {id: string}) => (
  <Typography color="inherit">
    <FormattedMessage id={id} />
  </Typography>
);

export default withStyles(styles)(Footer);
