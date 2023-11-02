import React from 'react';
import {GridProvider} from '../index';
import { BreakpointsProvider } from '../index';
import { Provider as PaperProvider} from '../index';


export const AppProvider = (props)=>{
    
  const gridprops = {

    breakingpoints:{
      xs: 428,
      sm: 767,
      md: 992,
      lg: 1192,
      xl: 1366
    },
    sizes: {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3,
        xl: 3,
    },
  
  
    padding: 0,
  
  };


  
  return (
    <GridProvider {...gridprops}>
         
          
              {props.children}
          
   </GridProvider>
    
  );
}
