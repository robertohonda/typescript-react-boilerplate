import React from 'react'
import { CardActions, Grid, TextField, IconButton, Typography } from '@material-ui/core';
import moduleName from '.'
import AddCartIcon from "@material-ui/icons/AddShoppingCart"
import PruductQuantity from './Quantity'

const Actions = () => {
  return (
    <CardActions>
      <Grid container justify="space-between" alignItems="flex-end">
        <Grid item>
          <Typography variant="body2">
            55 vendidos
          </Typography>
        </Grid>
        <Grid item>
        <PruductQuantity />
        {/* <Button>
          <AddCartIcon />
          Adicionar
        </Button> */}
        <IconButton>
          <AddCartIcon />
        </IconButton>
        </Grid>
      </Grid>
    </CardActions>
  )
}

export default Actions
