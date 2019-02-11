import PropTypes from "prop-types";
import React from "react";

import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Search = ({ classes, label }: any) => (
  <div className={classes.search}>
    <div className={classes.searchIcon}>
      <SearchIcon />
    </div>
    <InputBase
      placeholder={label}
      classes={{
        input: classes.inputInput,
        root: classes.inputRoot,
      }}
    />
  </div>
);

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default Search;
