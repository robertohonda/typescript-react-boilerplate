import React from "react"
import PropTypes from "prop-types"

import SearchIcon from "@material-ui/icons/Search"
import { InputBase } from "@material-ui/core"
import { intlShape } from "react-intl"

const Search = ({ classes, label }) => (
  <div className={classes.search}>
    <div className={classes.searchIcon}>
      <SearchIcon />
    </div>
    <InputBase
      placeholder={label}
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput
      }}
    />
  </div>
)

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
}

export default Search
