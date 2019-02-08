import React from "react"
import PropTypes from "prop-types"

import { withRouter } from "react-router-dom"

import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  withStyles
} from "@material-ui/core"

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import styles from "./styles"

const DrawerListItem = ({ Icon, text, onClick }) => (
  <ListItem button key={text} onClick={onClick}>
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
)

const categories = ["Produtos", "Cosméticos", "Açougue"]

const CustomDrawer = ({ drawer, classes, closeDrawer, theme, history }) => (
  <Drawer
    className={classes.drawer}
    variant="persistent"
    anchor="left"
    open={drawer.open}
    classes={{
      paper: classes.drawerPaper
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
        <DrawerListItem
          text={text}
          key={i}
          Icon={ShoppingBasketIcon}
          onClick={() => history.push("/seila")}
        />
      ))}
    </List>
  </Drawer>
)

CustomDrawer.propTypes = {
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  drawer: PropTypes.shape({
    open: PropTypes.bool.isRequired
  }),
  closeDrawer: PropTypes.func.isRequired
}

export default withStyles(styles)(withRouter(CustomDrawer))
