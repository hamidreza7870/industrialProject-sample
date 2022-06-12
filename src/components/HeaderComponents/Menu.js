import * as React from "react";
import { Toolbar, Container } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const navLinks = [
    {id:0, title: `صفحه اصلی`, path: `/` },
    {id:1, title: `خدمات`, path: `/services` },
    {id:2, title: `درباره`, path: `/about` },
    {id:4, title: `پروژه ها`, path: `/Projects` },
    {id:5, title: `بلاگ`, path: `/blog` },
    {id:3, title: `تماس`, path: `/contact` },
]
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "transparent",
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `white`
    },
    itemMenu: {
        paddingLeft: 20,
        paddingRight: 0,
        fontWeight: 600,
        fontSize: 1.3,
    },
    lisMenu: {
        transition: ".3s",
        "&:hover": {
            "&::before": {
                content: "''",
                backgroundColor: theme.palette.secondary.main,
                width: 10,
                height: 3,
                position: "absolute",
                right: "35%",
                transform: "translateX(50%)",
                bottom: 10,
                transition: ".3s",
            },
            color : theme.palette.secondary.main,
        }
        
    },
    navbarDisplayFlex: {
        // paddingLeft:"9rem"
    }
}));
    

const Menu = () => {
    const classes = useStyles();
  return (
      <Toolbar className={classes.root}>
          <Container maxWidth="md" className={classes.navbarDisplayFlex}>
            <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex} >
                {navLinks.map(({ title, path }) => (
                    <a href={path} key={title} className={classes.linkText}>
                    <ListItem button className={classes.lisMenu}>
                        <ListItemText className={classes.itemMenu} primary={title} />
                    </ListItem>
                    </a>
                ))}
            </List>
        </Container>
    </Toolbar>
  )
}
export default Menu;