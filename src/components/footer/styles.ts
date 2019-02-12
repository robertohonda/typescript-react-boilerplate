import { createStyles, Theme } from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
  root: {
    // height: 100,
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
});

export type Styles = typeof styles;

export default styles;
