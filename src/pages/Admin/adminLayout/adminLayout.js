import './adminLayout.css';
import * as React from 'react';
import { Container,Stack,Paper} from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
const AdminLayout  = () => {
    return (
  <Container>
     <Paper sx={{position:'fixed',left:'0px',top:'80px',height:'100%'}}>
     <Stack sx={{paddingTop:'0px',padding:'40px'}} direction="column" >
    <ul style={{display:'flex',flexFlow:'column'}}>
      <li>
  
      <NavLink exact  activeClassName='is-active' to='/adminLayout/adminHome'>Home</NavLink>
      </li>
      <li>
      <NavLink activeClassName='is-active' to='/adminLayout/adminServices'>Services</NavLink>
        {/* <Link to="/LogIns">LogIns</Link> */}
      </li>
      <li>
      <NavLink exact activeClassName='is-active' to='/adminLayout/adminAbout'>About Us</NavLink>
        {/* <Link to="/contact">Contact</Link> */}
      </li>
      
      <li>
      <NavLink activeClassName='is-active' to='/adminLayout/adminContact'>Contact Us</NavLink>
        {/* <Link to="/LogIns">LogIns</Link> */}
      </li>
      
    </ul>
    </Stack>
     </Paper>
     <Container sx={{paddingTop:'100px'}}>
        <Outlet/>
     </Container>
  </Container>
    );
}
export default AdminLayout;