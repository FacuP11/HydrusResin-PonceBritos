import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {styled} from '@mui/styles';
import CartWidjet from "../CartWidjet/CartWidget";
import { Link } from "react-router-dom";
const MyToolbar = styled(Toolbar)({
    background: 'black',
});

function NavBar (){

    return (
    <div>
        
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <MyToolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 5 }}>
            <MenuIcon />
          </IconButton>
          <CartWidjet />
          <Link to= "/">
            <Typography variant="h2" color="inherit" component="div">
            Hydrus Resin
            </Typography>
            </Link>
              <CartWidjet />
        </MyToolbar>
      </AppBar>
    </Box>
      
        
    </div>
    );
}

export default NavBar;