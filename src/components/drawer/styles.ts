import { createStyles, Theme } from "@material-ui/core";
import { DRAWER_WIDTH } from "../layout/styles";

const styles = (theme: Theme) => createStyles({
  drawer: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
  drawerHeader: {
    alignItems: "center",
    display: "flex",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
});

export type Styles = typeof styles;

export default styles;
