import React from "react";
import { Card, CardMedia, Typography, Button, CardContent, CardActionArea } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount"
import { Box } from "@mui/system";
import {CartContext} from '../../context/CartContext';
import { useContext } from "react";

function ItemDetail ({ info }) {

const agregarAlCarrito = useContext(CartContext);    
console.log(agregarAlCarrito)

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'

                }}>
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
                                <Typography>
                                    {info.desc}
                                </Typography>
                            </CardContent>
                            <Button size="small" color="secondary">
                                $ {info.precio}
                            </Button>
                        </Box>
                    </CardActionArea>

                    <ItemCount info={info} />
                    <Button color="secondary" onClick={agregarAlCarrito} > Agregar al carrito </Button>
                </Card>
            </Box>
        </div>
    )
}
export default ItemDetail;