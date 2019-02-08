import React from 'react'
import PropTypes from 'prop-types'
import { CardActionArea, CardContent, Grid } from '@material-ui/core';

import ProductImage from "./Image"
import ProductName from "./Name"
import ProductPrice from "./Price"

const ActionArea = ({classes}) => {
  return (
    <CardActionArea>
      <div className={classes.cardHeader}>
        <ProductImage
          height="140"
          src="https://mambo.vteximg.com.br/arquivos/ids/209732/184922.jpg?v=636342547888870000"
        />
      </div>
      <CardContent>
        <ProductName name="Feijão Pronto" />
        <Grid container justify="space-between">
          <ProductPrice price="¥ 100" />
        </Grid>
      </CardContent>
    </CardActionArea>
  )
}

ActionArea.propTypes = {
  classes: PropTypes.object.isRequired
}

export default ActionArea
