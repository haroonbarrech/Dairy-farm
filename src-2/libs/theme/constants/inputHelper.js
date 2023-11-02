import { useGrid } from "../grids";


export const inputType = (type)=>{

    const {defaultTheme} = useGrid();
    const colors = defaultTheme.colors;
    
    const inputType = {
        type: {

        }
    };
    
    switch (type) {
        case 'Sae':
            
        break;

        case "TextDisabled":   

        break;

        case "OutlinedRound":
 
        break;

        case "OutlinedBox":
            
        break;

        case 'OutlinedBoxBlock':
            
        break;

        case "OutlinedRoundDisabled": 
            
        break;

        case "OutlinedBoxDisabled": 
            
        break;

        case "OutlinedBoxBlockDisabled":  

        break; 

        default :
        // console.log('default case');
    }

    return inputType;
}