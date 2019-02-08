import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core';

const Quantity = props => {
  return (
    <TextField
    style={{width: 70}}
      defaultValue={1}
      label="Quantidade"
      type="number"
      inputProps={{
        min: 1
      }}
      InputLabelProps={{
        shrink: true
      }}
      />
  )
}

Quantity.propTypes = {

}

export default Quantity
