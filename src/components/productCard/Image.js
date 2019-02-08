import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core';

const Image = ({height, src}) => {
  return (
    <Grid container justify="center">
      <img height={height} src={src}/>
    </Grid>
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
}

export default Image
