import React from "react"
import PropTypes from "prop-types"

import ids from "../../translations/id/views/footer"

import styles from "./styles"
import { withStyles } from "@material-ui/core/styles"
import { Typography, Grid } from "@material-ui/core"
import { FormattedMessage } from "react-intl"

const Text = ({ id }) => (
  <Typography color="inherit">
    <FormattedMessage id={id} />
  </Typography>
)

const Footer = ({ classes }) => {
  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      alignItems="center"
    >
      <Text id={ids.company} />
      <Text id={ids.address} />
      <Text id={ids.zipCode} />
      <Text id={ids.email} />
      <Text id={ids.phone} />
    </Grid>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Footer)
