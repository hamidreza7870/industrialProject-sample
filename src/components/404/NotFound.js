import React from 'react'
import { Grid, Container, Typography, Box } from '@material-ui/core'
import image404 from '../../assets/images/404.png'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 30
    }
  },
  fullHeight: {
    height: "100%"
  },
  titleProjectRequest: {
    color: "black",
    marginBottom: 20,
    marginTop: 20
  },
  topImage: {
    marginBottom: 20,
    width: 400,
    [theme.breakpoints.down("sm")]: {
      width: 250
    }
  }
}))

export default function NotFound() {
  const classes = useStyles()
  return (
    <Box pt={20} pb={20} className={classes.root} >
      <Container className={classes.fullHeight} maxWidth="md" >
        <Grid className={classes.fullHeight} container direction="column" alignItems="center" justify="center" >
          <img src={image404} alt="" className={classes.topImage} />
          <Typography variant="body1" className={classes.titleProjectRequest} >
            صفحه مورد نظر پیدا نشد!
          </Typography>
        </Grid>
      </Container>
    </Box>
  )
}