import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function NavBar (){

    return (
    <div>
        <h1>Hydrus Resin </h1>
        <Stack direction="row" spacing={2}>
            <Button> Home </Button>
            <Button> Ceniceros </Button>
            <Button> Bandejas </Button>
            <Button> Diseña el tuyo </Button>
        </Stack>
        
    </div>
    );
}

export default NavBar;