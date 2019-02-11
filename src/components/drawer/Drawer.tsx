import React, {Component} from "react";

import {RouteComponentProps, withRouter} from "react-router-dom";

import {Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, withStyles} from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import styles from "./styles";

const categories = ["Produtos", "Cosméticos", "Açougue"];

const DrawerListItem = ({Icon, text, onClick}: any) => (
  <ListItem button={true} key={text} onClick={onClick}>
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

class CustomDrawer extends Component<RouteComponentProps<{}> & any> {

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
    const {history}: any = this;
    history.push("/seila");
  }
}

export default withStyles(styles)(withRouter(CustomDrawer));
