import React from "react"
import styles from "./styles"
import PropTypes from "prop-types"
import { Card, withStyles } from "@material-ui/core"
import ProductActions from "./Actions"
import ProductActionArea from "./ActionArea";

const ProductCard = ({ classes }) => (
  <Card className={classes.root}>
    <ProductActionArea classes={classes} />
    <ProductActions />
  </Card>
)

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProductCard)
