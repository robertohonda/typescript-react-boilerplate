import {withStyles, WithStyles} from "@material-ui/core/styles";
import React from "react";

import {InjectedIntlProps} from "react-intl";
import AppBar from "./AppBar";
import styles from "./styles";

export interface IHeaderProps extends WithStyles, InjectedIntlProps {
  openDrawer: () => void;
  drawer: {
    open: boolean;
  };
}
const Header: React.SFC<IHeaderProps> = ({classes, drawer, openDrawer, intl}) => (
  <AppBar classes={classes} open={drawer.open} openDrawer={openDrawer} intl={intl} />
);

export default withStyles(styles)(Header);
