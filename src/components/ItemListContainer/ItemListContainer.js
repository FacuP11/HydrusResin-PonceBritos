import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import ItemList from '../ItemList/ItemList';
import { Box } from "@mui/system";
import items from "../productos";
const data = items;


const getCategory = (categoryId) => {
  
  return new Promise ( res => {
      res(data.find(data => data.category === String(categoryId) ))
      console.log('Category:' + categoryId)})
}
const ItemListContainer = () => {
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState (false);
  const {categoryId} = useParams();
  
    useEffect(() => {
        setLoader(true) 
      
        setTimeout (()=>{
          getCategory(categoryId)
              .then(res=> {
          
                setProduct(res)
                console.log('Producto:' + product)
                setLoader(false)
              
          }) 
      },2000)
  }, [])

  return (
    
      <Box
      sx={
        {
          display:'flex'
        }
      }>
        {loader ? <h2 > Cargando...</h2> : <ItemList info={product}/> }
      </Box>
    

  );
}
export default ItemListContainer;

