import { createMuiTheme } from '@material-ui/core/styles'
import palette from './palette'
let theme = createMuiTheme()
theme = createMuiTheme({
  palette,
  spacing: 2.5,
  typography: {
    h1: {
      fontFamily : "iranyekan",
      fontSize: "3rem",
      fontWeight : 700,
      lineHeight: "1.33em",
      position: "relative",
    },
    h2: {
      fontFamily : "iranyekan",
      fontSize: "2rem",
      fontWeight : "800",
      lineHeight: "1.33em",
      position: "relative",
    },
    h3: {
      fontFamily : "iranyekan",
      fontWeight : "bold",
      fontSize: "1.3333rem",
      lineHeight: "1.33em",
      position: "relative",
    },
    body1: {
      fontFamily : "iranyekan",
      fontWeight : 600,
      lineHeight: "1.8rem",
      letterSpacing :0
    },
    body2: {
      fontFamily : "iranyekan",
      letterSpacing : 0,
      padding: 5,
      fontWeight: 400,
    },
    subtitle1: {
      fontWeight : 400,
      lineHeight: "2rem",
    },
    button: {
      fontFamily : "iranyekan",
      backgroundColor: palette.secondary.main,
      fontSize: "1.3rem",
      fontWeight: 600,
      color: "black",
      border:"2px solid #fdc900",
      borderRadius: 3,
      paddingTop : 5,
      paddingBottom :5,
      paddingLeft :28,
      paddingRight : 28,
  }
  }
})
export default theme
