import { withStyles } from "@material-ui/core/styles";
import React from "react";
import messageIds from "../../translations/id/views/header";

import AppBar from "./AppBar";
import styles from "./styles";

const Header = ({ classes, drawer, openDrawer, intl }: any) => (
  <AppBar
    messageIds={messageIds}
    classes={classes}
    open={drawer.open}
    openDrawer={openDrawer}
    intl={intl}
  />
);

export default withStyles(styles)(Header);
