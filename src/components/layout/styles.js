export const DRAWER_WIDTH = 240
export const HEADER_HEIGHT = 64

const styles = theme => ({
  fullHeight: {
    height: "100%"
  },
  gridContainerFooter: {
    minHeight: '100%'
  },
  rootHeader: {
    display: "flex",
    height: "100%",
    paddingTop: HEADER_HEIGHT //height of header
  },
  content: {
    width: "100%",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -DRAWER_WIDTH
  },
  main: {
    padding: theme.spacing.unit * 2
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
})

export default styles
