import classNames from "classnames";
import React, {Component} from "react";

import {CssBaseline, Grid, withStyles, WithStyles} from "@material-ui/core";
import styles, {Styles} from "./styles";

import Footer from "../footer";
import Header from "../header";

// import {intlShape} from "react-intl";
import {ThemeOptions} from "@material-ui/core/styles/createMuiTheme";
import {InjectedIntlProps} from "react-intl";
import {RenderRoutes} from "../../core/routes/renderRoutes";
import {IRoute} from "../../core/routes/routes";
import Drawer from "../drawer";

interface ILayoutProps extends WithStyles<Styles>, InjectedIntlProps {
  renderRoutes: RenderRoutes;
  routes: IRoute[];
  theme: ThemeOptions;
}

class Layout extends Component<ILayoutProps> {
  public state = {
    drawer: {
      open: false,
    },
  };

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
              container
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

  private openDrawer = () =>
    this.setState({
      drawer: {
        ...this.state.drawer,
        open: true,
      },
    })

  private closeDrawer = () =>
    this.setState({
      drawer: {
        ...this.state.drawer,
        open: false,
      },
    })
}

export default withStyles(styles, {withTheme: true})(Layout);
