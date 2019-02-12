import classNames from "classnames";
import React from "react";

import {AppBar, IconButton, Toolbar, Typography, WithStyles} from "@material-ui/core";

import ids from "../../translations/id/views/header";

import MenuIcon from "@material-ui/icons/Menu";
import {InjectedIntlProps} from "react-intl";
import EndAdornment from "./EndAdornment";
import Search from "./Search";

export interface IHeaderAppBarProps extends InjectedIntlProps, WithStyles {
  open: boolean;
  openDrawer: () => void;
}

const HeaderAppBar: React.SFC<IHeaderAppBarProps> = ({classes, intl, open, openDrawer}) => (
  <AppBar
    position="fixed"
    className={classNames(classes.appBar, {
      [classes.appBarShift]: open,
    })}
  >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={openDrawer}
        className={classNames(classes.menuButton, open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <Title title={intl.formatMessage({id: ids.title})} />
      <div className={classes.grow} />
      <Search classes={classes} label={intl.formatMessage({id: ids.search})} />
      <EndAdornment classes={classes} />
    </Toolbar>
  </AppBar>
);

const Title = ({title}: {title: string}) => (
  <Typography variant="h6" color="inherit" noWrap={true}>
    {title}
  </Typography>
);

export default HeaderAppBar;
