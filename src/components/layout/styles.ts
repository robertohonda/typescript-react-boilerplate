export const DRAWER_WIDTH = 240;
export const HEADER_HEIGHT = 64;

const styles = (theme: any) => ({
  content: {
    marginLeft: -DRAWER_WIDTH,
    transition: theme.transitions.create("margin", {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
    width: "100%",
  },
  contentShift: {
    marginLeft: 0,
    transition: theme.transitions.create("margin", {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeOut,
    }),
  },
  fullHeight: {
    height: "100%",
  },
  gridContainerFooter: {
    minHeight: "100%",
  },
  main: {
    padding: theme.spacing.unit * 2,
  },
  rootHeader: {
    display: "flex",
    height: "100%",
    paddingTop: HEADER_HEIGHT, // height of header
  },
});

export default styles;
