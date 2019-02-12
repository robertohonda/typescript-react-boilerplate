import React, {Component} from "react";

import {RouteComponentProps, withRouter} from "react-router-dom";

import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
  WithStyles,
} from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import {ThemeOptions} from "@material-ui/core/styles/createMuiTheme";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import styles, {Styles} from "./styles";

const categories = ["Produtos", "Cosméticos", "Açougue"];

export interface ICustomDrawerProps extends RouteComponentProps, WithStyles<Styles> {
  drawer: {
    open: boolean;
  };
  closeDrawer: () => void;
  theme: ThemeOptions;
}
class CustomDrawer extends Component<ICustomDrawerProps> {
  public render() {
    const {drawer, classes, closeDrawer, theme}: any = this.props;
    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawer.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={closeDrawer}>
            {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {categories.map((text, i) => (
            <DrawerListItem text={text} key={i} Icon={ShoppingBasketIcon} onClick={this.handleClickListItem} />
          ))}
        </List>
      </Drawer>
    );
  }

  private handleClickListItem = () => {
    const {history}: any = this.props;
    history.push("/seila");
  }
}

const DrawerListItem = ({Icon, text, onClick}: any) => (
  <ListItem button={true} key={text} onClick={onClick}>
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

export default withStyles(styles)(withRouter(CustomDrawer));
