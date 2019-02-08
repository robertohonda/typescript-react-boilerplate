import React from "react"
import PropTypes from "prop-types"
import { Typography } from "@material-ui/core";

const Price = ({price}) => {
  return (
    <Typography color="error" align="center" variant="h5">
      {price}
    </Typography>
  )
}

Price.propTypes = {
  price: PropTypes.string.isRequired
}

export default Price
