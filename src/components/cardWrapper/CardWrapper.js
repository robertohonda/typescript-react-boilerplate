import React from "react"
import PropTypes from "prop-types"
import { CardContent, Card } from "@material-ui/core"

const CardWrapper = ({ children }) => (
  <Card>
    <CardContent>
      {children}
    </CardContent>
  </Card>
)

CardWrapper.propTypes = {
  children: PropTypes.element.isRequired
}

export default CardWrapper
