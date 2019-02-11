
import {fade} from "@material-ui/core/styles/colorManipulator";
import {DRAWER_WIDTH, HEADER_HEIGHT} from "../layout/styles";

const styles = (theme: any): any => ({
  appBar: {
    minHeight: HEADER_HEIGHT,
    transition: theme.transitions.create(["margin", "width"], {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
  },
  appBarShift: {
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(["margin", "width"], {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeOut,
    }),
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
  },
  content: {
    flexGrow: 1,
    marginLeft: -DRAWER_WIDTH,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
  },
  contentShift: {
    marginLeft: 0,
    transition: theme.transitions.create("margin", {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeOut,
    }),
  },
  grow: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  inputInput: {
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    paddingRight: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      "&:focus": {
        width: 200,
      },
      "width": 120,
    },
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  root: {
    display: "flex",
  },
  search: {
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    "backgroundColor": fade(theme.palette.common.white, 0.15),
    "borderRadius": theme.shape.borderRadius,
    "marginLeft": 0,
    "position": "relative",
    "width": "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto",
    },
  },
  searchIcon: {
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    pointerEvents: "none",
    position: "absolute",
    width: theme.spacing.unit * 9,
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

export default styles;
