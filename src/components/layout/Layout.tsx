import classNames from "classnames";
import React, {Component} from "react";

import {CssBaseline, Grid, withStyles} from "@material-ui/core";
import styles from "./styles";

import Footer from "../footer";
import Header from "../header";

// import {intlShape} from "react-intl";
import Drawer from "../drawer";

interface ILayoutProps {
  classes: any;
  intl: any;
  renderRoutes: any;
  routes: object;
  theme: object;
}

class Layout extends Component<ILayoutProps> {
  public state = {
    drawer: {
      open: false,
    },
  };

  public openDrawer = () =>
    this.setState({
      drawer: {
        ...this.state.drawer,
        open: true,
      },
    })

  public closeDrawer = () =>
    this.setState({
      drawer: {
        ...this.state.drawer,
        open: false,
      },
    })

  public render() {
    const {renderRoutes, routes, classes, theme, intl} = this.props;
    const {drawer} = this.state;
    return (
      <div className={classes.fullHeight}>
        <div className={classes.rootHeader}>
          <CssBaseline />
          <Header intl={intl} drawer={drawer} openDrawer={this.openDrawer} />
          <Drawer drawer={drawer} closeDrawer={this.closeDrawer} theme={theme} />
          <div
            className={classNames(classes.content, {
              [classes.contentShift]: drawer.open,
            })}
          >
            <Grid
              container={true}
              direction="column"
              justify="space-between"
              className={classes.gridContainerFooter}
              wrap="nowrap"
            >
              <main className={classes.main}>{renderRoutes(routes)}</main>
              <Footer />
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, {withTheme: true})(Layout);
