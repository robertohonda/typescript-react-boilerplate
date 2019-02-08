import React from "react"
import PropTypes from "prop-types"
import { Typography } from "@material-ui/core";

const Name = ({name}) => {
  return (
    <Typography align="center" variant="h6">
      {name}
    </Typography>
  )
}

Name.propTypes = {
  name: PropTypes.string.isRequired
}

export default Name
