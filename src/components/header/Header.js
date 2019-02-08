import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { intlShape } from "react-intl"
import messageIds from "../../translations/id/views/header"

import AppBar from "./AppBar"
import styles from "./styles"

const Header = ({ classes, drawer, openDrawer, intl }) => (
  <AppBar
    messageIds={messageIds}
    classes={classes}
    open={drawer.open}
    openDrawer={openDrawer}
    intl={intl}
  />
)

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  drawer: PropTypes.shape({
    open: PropTypes.bool.isRequired
  }),
  openDrawer: PropTypes.func.isRequired,
  intl: intlShape.isRequired
}

export default withStyles(styles)(Header)
