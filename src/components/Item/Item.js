import React from "react";
import { Card, CardMedia, Typography, CardActions, Button, CardContent, CardActionArea } from "@mui/material";
import ItemCount from '../ItemCount/ItemCount'

function Item({info}) {
    const props= info;
    
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={info.image}
                        alt={info.id}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.name}
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="secondary">
                        $ {info.precio}
                    </Button>
                </CardActions>
                <ItemCount info={props}/>
            </Card>
        </div>
    )
}

export default Item;