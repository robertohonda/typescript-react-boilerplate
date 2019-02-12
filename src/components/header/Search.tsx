import React from "react";

import {InputBase, WithStyles} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export interface ISearchProps extends WithStyles {
  label: string;
}

const Search: React.SFC<ISearchProps> = ({classes, label}) => (
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

export default Search;
