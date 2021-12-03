import React from "react";
import { Card, CardMedia, Typography, Button, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";


function Item ({ info }) {
   

    return (
        <>
        <Box>
       
            <Card sx={{ maxWidth: 400 }}>

                
                 <Link to={`item/${info.id}`}> 
                    <CardMedia
                        component="img"
                        height="200"
                        image={info.image}
                        alt={info.id}
                        
                    />
                    <Box
                            sx={{
                                
                                display: 'flex',
                                justifyContent:'center'

                            }}>
                    <CardContent>
                        
                        <Typography gutterBottom variant="h5" component="div">
                    {info.name}
                        </Typography>

                    </CardContent>

                    <Button size="small" color="secondary">
                        $ {info.precio}
                    </Button>
                    </Box>
                    
                     </Link> 
                   
                
                    
            
        </Card>
        </Box>
        </>
    )
}

export default Item;