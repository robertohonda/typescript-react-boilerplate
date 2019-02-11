import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import { intlShape } from "react-intl";
import EndAdornment from "./EndAdornment";
import Search from "./Search";

const Title = ({ title }: any) => (
  <Typography variant="h6" color="inherit" noWrap={true}>
    {title}
  </Typography>
);

const HeaderAppBar = ({ classes, intl, messageIds, open, openDrawer }: any) => (
  <AppBar
    position="fixed"
    className={classNames(classes.appBar, {
      [classes.appBarShift]: open,
    })}
  >
    <Toolbar disableGutters={!open}>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={openDrawer}
        className={classNames(classes.menuButton, open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <Title title={intl.formatMessage({ id: messageIds.title })} />
      <div className={classes.grow} />
      <Search
        classes={classes}
        label={intl.formatMessage({ id: messageIds.search })}
      />
      <EndAdornment classes={classes} />
    </Toolbar>
  </AppBar>
);

HeaderAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
  messageIds: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  openDrawer: PropTypes.func.isRequired,
};

export default HeaderAppBar;
