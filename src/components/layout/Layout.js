import React, { Component } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import { withStyles, Grid, CssBaseline } from "@material-ui/core"
import styles from "./styles"

import Header from "../Header"
import Footer from "../Footer"

import { intlShape } from "react-intl"
import Drawer from "../Drawer"

class Layout extends Component {
  state = {
    drawer: {
      open: false
    }
  }

  openDrawer = () =>
    this.setState({
      drawer: {
        ...this.state.drawer,
        open: true
      }
    })

  closeDrawer = () =>
    this.setState({
      drawer: {
        ...this.state.drawer,
        open: false
      }
    })

  render() {
    const { renderRoutes, routes, classes, theme, intl } = this.props
    const { drawer } = this.state
    return (
      <div className={classes.fullHeight}>
        <div className={classes.rootHeader}>
          <CssBaseline />
          <Header intl={intl} drawer={drawer} openDrawer={this.openDrawer} />
          <Drawer
            drawer={drawer}
            closeDrawer={this.closeDrawer}
            theme={theme}
          />
          <div
            className={classNames(classes.content, {
              [classes.contentShift]: drawer.open
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
    )
  }
}

Layout.propTypes = {
  intl: intlShape.isRequired,
  renderRoutes: PropTypes.func.isRequired,
  routes: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(Layout)
