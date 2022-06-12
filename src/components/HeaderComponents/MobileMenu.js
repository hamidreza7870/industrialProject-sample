import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  listText: {
    color: "black"
  },
  linkText: {
    textDecoration: `none`,
    color: `#000`,
    fontSize: "0.93333rem",
  },
  listMenu: {
    textAlign: "right",
    borderBottom: "1px solid #cccccc",
    borderRight: "1px solid #cccccc",
  },
  btnMenu: {
    backgroundColor: "#051829",
    width: 45,
    height: 40,
    border: 0,
    padding: "5px 10px",
    borderRadius: 3,
    outline: 0,
    zIndex: 20,
    marginRight: "auto"
  }
}));
const navLinks = [
  { id: 0, title: `صفحه اصلی`, path: `/` },
  { id: 1, title: `خدمات`, path: `/services` },
  { id: 2, title: `درباره`, path: `/about` },
  { id: 4, title: `پروژه ها`, path: `/Projects` },
  { id: 5, title: `بلاگ`, path: `/blog` },
  { id: 3, title: `تماس`, path: `/contact` },
]
export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navLinks.map(({ title, path }) => (
          <a href={path} key={title} className={classes.linkText}>
            <ListItem button className={classes.listMenu}>
              <ListItemText className={classes.itemMenu} primary={title} />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );
  return (
    <div style={{ marginRight: "auto" }}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className={classes.btnMenu}><MenuIcon /></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
