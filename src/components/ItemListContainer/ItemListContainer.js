import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from '../ItemList/ItemList';
import { Box } from "@mui/system";

import LoadingButton from '@mui/lab/LoadingButton';
import pedirDatos from "../../helpers/pedirDatos";



const ItemListContainer = () => {
  
const [loader, setLoader] = useState(false);
const [productos, setProductos] = useState([]);
const { categoryId } = useParams();

  useEffect(() => {

    setLoader(true)

    pedirDatos()
      .then((resp) => {
        if (!categoryId) {
          setProductos(resp)
        } else {
          setProductos(resp.filter(prod => prod.category === categoryId))
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoader(false)
      })

  }, [categoryId])
  return (
    <>
        {
            loader 
                ? <LoadingButton loading variant="outlined">
                  Submit
                  </LoadingButton>
                : <ItemList data={productos}/>
        }
    </>
)

}
export default ItemListContainer;

