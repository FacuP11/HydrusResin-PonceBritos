import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ImageListItemBar, IconButton } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const itemData = [
    {
      img: 'https://github.com/FacuP11/HydrusResin-PonceBritos/blob/master/src/assests/images/AlienCogo.png?raw=true', 
      title: 'AlienCogo',
    },
    {
      img: 'https://github.com/FacuP11/HydrusResin-PonceBritos/blob/master/src/assests/images/BartExplode.png?raw=true',
      title: 'BartExplode',
    },
    {
      img: 'https://github.com/FacuP11/HydrusResin-PonceBritos/blob/master/src/assests/images/BurbujaHigh.png?raw=true',
      title: 'BurbujaHigh',
    },
    {
      img: 'https://github.com/FacuP11/HydrusResin-PonceBritos/blob/master/src/assests/images/ChicasSP.png?raw=true',
      title: 'ChicasSP',
    },
    {
      img: 'https://github.com/FacuP11/HydrusResin-PonceBritos/blob/master/src/assests/images/CogoAngel.png?raw=true',
      title: 'CogoAngel',
    },
    {
      img: 'https://github.com/FacuP11/HydrusResin-PonceBritos/blob/master/src/assests/images/Excursio.png?raw=true',
      title: 'Excursio',
    },
    {
      img: 'https://github.com/FacuP11/HydrusResin-PonceBritos/blob/master/src/assests/images/Mariposa.png?raw=true',
      title: 'Mariposa',
    },
    {
      img: 'https://github.com/FacuP11/HydrusResin-PonceBritos/blob/master/src/assests/images/MoneyBag.png?raw=true',
      title: 'MoneyBag',
    },
    {
      img: 'https://github.com/FacuP11/HydrusResin-PonceBritos/blob/master/src/assests/images/Vokita.png?raw=true',
      title: 'Vokita',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];


function ItemListContainer() {

    function srcset(image, width, height, rows = 1, cols = 1) {
        return {
          src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${width * cols}&h=${
            height * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
      }

    return(
        <div>
            
    <ImageList
      sx={{
        width: 550,
        height: 500,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={300}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  )
 
        </div>
    )
};

export default ItemListContainer;

