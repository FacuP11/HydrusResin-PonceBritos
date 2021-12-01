import React from "react";
import { Card, CardMedia, Typography, Button, CardContent, CardActionArea } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount"
import { Box } from "@mui/system";

function ItemDetail({info}) {
    const n = info.id;
    return (
        <div>
            <Box>

                <Card sx={{ maxWidth: 400 }}>

                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={info.image}
                            alt={info.id}

                        />
                        <Box
                            sx={{

                                display: 'flex',
                                justifyContent: 'center'

                            }}>
                            <CardContent>

                                <Typography gutterBottom variant="h4" component="div">
                                    {info.name}
                                </Typography>

                            </CardContent>

                            <Button size="small" color="secondary">
                                $ {info.precio}
                            </Button>
                        </Box>
                    </CardActionArea>

                    <ItemCount info={info} />
                </Card>
            </Box>
        </div>
    )
}
export default ItemDetail;