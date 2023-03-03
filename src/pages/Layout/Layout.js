import { Outlet } from "react-router-dom";
import './Layout.css';
import * as React from 'react';
import { Typography } from "@mui/material";
import Header from "./Header";
const Layout = () => {
  return (
    <>
 
      
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