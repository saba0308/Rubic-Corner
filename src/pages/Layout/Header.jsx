import React, { Fragment} from 'react';
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

// import logo from 'https://img.icons8.com/bubbles/344/amazon-alexa-logo.png';
import { theme } from './Theme';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Stack } from '@mui/system';


const styles = {
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  logoContainer: {
    padding: 0,
    width:'100px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabs: {
    marginLeft: 'auto',
    '& .MuiButtonBase-root.MuiTab-root': {
      fontSize: 20,
    },
    '& .Mui-selected': {
      backgroundColor: '#1976d2',
      color: 'white',
      opacity:0.7,
      borderRadius: 2,
    },
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
    color: 'Black',
  },

  hamburgerMenuIcon: {
    height: '50px',
    width: '50px',
  },
  menuIconContainer: {
    position:'absolute',
    right:'-25%',
    color: 'black',
    '&:hover': {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
    backgroundColor:'white',
  },
};

const DesktopNavigation = () => {
  

  
  return (
   <Stack sx={{position:'relative',left:'700px'}} direction="row" alignItems="flex-end" >
    <ul >
      <li>
  
      <NavLink exact  activeClassName='is-active' to='/'>Home</NavLink>
      </li>
      <li>
      <NavLink activeClassName='is-active' to='/services'>Services</NavLink>
        {/* <Link to="/LogIns">LogIns</Link> */}
      </li>
      <li>
      <NavLink exact activeClassName='is-active' to='/about'>About Us</NavLink>
        {/* <Link to="/contact">Contact</Link> */}
      </li>
      
      <li>
      <NavLink activeClassName='is-active' to='/contact'>Contact Us</NavLink>
        {/* <Link to="/LogIns">LogIns</Link> */}
      </li>
   
    </ul>
    </Stack>
 
  );
};

const MobileNavigation = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <Box sx={styles.toolbarMargin} />
  
            
        <Stack sx={{paddingTop:'0px',padding:'40px'}} direction="column" >
    <ul style={{display:'flex',flexFlow:'column'}}>
      <li>
  
      <NavLink exact  activeClassName='is-active' to='/'>Home</NavLink>
      </li>
      <li>
      <NavLink activeClassName='is-active' to='/services'>Services</NavLink>
        {/* <Link to="/LogIns">LogIns</Link> */}
      </li>
      <li>
      <NavLink exact activeClassName='is-active' to='/about'>About Us</NavLink>
        {/* <Link to="/contact">Contact</Link> */}
      </li>
      
      <li>
      <NavLink activeClassName='is-active' to='/contact'>Contact Us</NavLink>
        {/* <Link to="/LogIns">LogIns</Link> */}
      </li>
      
    </ul>
    </Stack>
        
      </SwipeableDrawer>
      <IconButton
        sx={styles.menuIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon sx={styles.hamburgerMenuIcon} />
      </IconButton>
    </React.Fragment>
  );
};

const Header = () => {
  const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Fragment>
      <AppBar
        position="fixed"
        sx={styles.appbar}
        color="secondary"
        
        elevation={9}
      >
        <Toolbar disableGutters={true}>
          <Button
            disableRipple
            component={Link}
            to="/"
            sx={styles.logoContainer}
          >
            <Box alt="company logo" />
      <img  src="/images/design.png" alt="design" />
          </Button>
          {isMobileMode ? <MobileNavigation /> : <DesktopNavigation />}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
