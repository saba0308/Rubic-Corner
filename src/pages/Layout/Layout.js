import { Outlet, NavLink } from "react-router-dom";
import './Layout.css';
import * as React from 'react';
import { Typography } from "@mui/material";
import Header from "./Header";
const Layout = () => {
  return (
    <>
 
      <nav>
        <img src="/images/design.png" alt="" height={100} />
        <ul>
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
    
      </nav>
<Header/>
      <Outlet />
      
      <footer>
        <Typography sx={{textAlign:'center',position:'relative',top:60}} variant='body2' color='white' >
        Copyright &#169; Rubic Corner Solutions.All Right Reserved
        </Typography>
      </footer>
    </>
  )
};

export default Layout;