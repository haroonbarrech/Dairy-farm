import { useGrid } from "../grids";


export const btnType = (type)=>{

    const {defaultTheme} = useGrid();
    const colors = defaultTheme.colors;
    
    const btntype = {
        type: {

        }
    };
    
    switch (type) {
        case 'Text':
            btntype.type["flexDirection"] = 'row'; 
        break;

        case "TextDisabled":   
            btntype.type["opacity"] = 0.3;
        break;

        case "OutlinedRound":
            btntype.type["borderWidth"] = 1;
            btntype.type["borderColor"] = colors.border; 
            btntype.type["borderRadius"] = 50;
            btntype.type["flexDirection"] = 'row'; 
        break;

        case "OutlinedBox":
            btntype.type["borderWidth"] = 1;
            btntype.type["borderColor"] = colors.border; 
            btntype.type["borderRadius"] = 3;
            btntype.type["flexDirection"] = 'row';
        break;

        case 'OutlinedBoxBlock':
            btntype.type["borderWidth"] = 1;
            btntype.type["borderColor"] = colors.border; 
            btntype.type["borderRadius"] = 3;
            btntype.type["flexDirection"] = 'row';
            btntype.type["width"] = "100%"; 
        break;

        case "OutlinedRoundDisabled": 
            btntype.type["borderWidth"] = 1;
            btntype.type["borderColor"] = colors.border;
            btntype.type["borderRadius"] = 50;
            btntype.type["opacity"] = 0.3;
        break;

        case "OutlinedBoxDisabled": 
            btntype.type["borderWidth"] = 1;
            btntype.type["borderColor"] = colors.border;
            btntype.type["borderRadius"] = 3;
            btntype.type["opacity"] = 0.3;
        break;

        case "OutlinedBoxBlockDisabled": 
            btntype.type["borderWidth"] = 1;
            btntype.type["borderColor"] = colors.border;
            btntype.type["borderRadius"] = 3;
            btntype.type["width"] = "100%"; 
        break;

        case 'ContainedRound':
            btntype.type["backgroundColor"] = colors.background; 
            btntype.type["borderRadius"] = 50;
            btntype.type["flexDirection"] = 'row';
        break;

        case 'ContainedBox':
            btntype.type["backgroundColor"] = colors.background; 
            btntype.type["borderRadius"] = 3;
            btntype.type["flexDirection"] = 'row';
        break;

        case 'ContainedBoxBlock':
            btntype.type["backgroundColor"] = colors.background; 
            btntype.type["borderRadius"] = 8;
            btntype.type["flexDirection"] = 'row';
            btntype.type["width"] = "100%"; 
        break;

        case "ContainedRoundDisabled":
            btntype.type["backgroundColor"] = colors.background; 
            btntype.type["borderRadius"] = 50;
            btntype.type["flexDirection"] = 'row';
            btntype.type["opacity"] = 0.3;
        break;

        case "ContainedBoxDisabled":
            btntype.type["backgroundColor"] = colors.background; 
            btntype.type["borderRadius"] = 3;
            btntype.type["flexDirection"] = 'row';
            btntype.type["opacity"] = 0.3;
        break;

        case "ContainedBoxBlockDisabled":
            btntype.type["backgroundColor"] = colors.background; 
            btntype.type["borderRadius"] = 3;
            btntype.type["flexDirection"] = 'row';
            btntype.type["opacity"] = 0.3;
            btntype.type["width"] = "100%";
        break;

        case 'ElevatedRound':
            btntype.type["backgroundColor"] = colors.background; 
            btntype.type["borderRadius"] = 50;
            btntype.type["flexDirection"] = 'row';
            btntype.type["shadowColor"] = '#000';
            btntype.type["shadowOpacity"] = 0.22;
            btntype.type["shadowRadius"] = 2.22;
            btntype.type["elevation"] = 1.5;
        break;
        case 'ElevatedBox':
            btntype.type["backgroundColor"] = colors.background; 
            btntype.type["borderRadius"] = 3;
            btntype.type["flexDirection"] = 'row';
            btntype.type["shadowColor"] = '#000';
            btntype.type["shadowOpacity"] = 0.22;
            btntype.type["shadowRadius"] = 2.22;
            btntype.type["elevation"] = 1.5;
        break;
        case 'ElevatedBoxBlock':
            btntype.type["backgroundColor"] = colors.background; 
            btntype.type["borderRadius"] = 3;
            btntype.type["flexDirection"] = 'row';
            btntype.type["shadowColor"] = '#000';
            btntype.type["shadowOpacity"] = 0.22;
            btntype.type["shadowRadius"] = 2.22;
            btntype.type["elevation"] = 1.5;
            btntype.type["width"] = "100%";
        break;
        case "ElevatedRoundDisabled":
            btntype.type["backgroundColor"] = colors.background; 
            btntype.type["borderRadius"] = 50;
            btntype.type["flexDirection"] = 'row';
            btntype.type["opacity"] = 0.3;
            btntype.type["shadowColor"] = '#000';
            btntype.type["shadowOpacity"] = 0.22;
            btntype.type["shadowRadius"] = 2.22;
            btntype.type["elevation"] = 3;
        break;
        case "ElevatedBoxDisabled":
            btntype.type["backgroundColor"] = colors.background; 
            btntype.type["borderRadius"] = 3;
            btntype.type["flexDirection"] = 'row';
            btntype.type["opacity"] = 0.3;
            btntype.type["shadowColor"] = '#000';
            btntype.type["shadowOpacity"] = 0.22;
            btntype.type["shadowRadius"] = 2.22;
            btntype.type["elevation"] = 3;  
        break;
        case "ElevatedBoxBlockDisabled":
            btntype.type["backgroundColor"] = colors.background; 
            btntype.type["borderRadius"] = 3;
            btntype.type["flexDirection"] = 'row';
            btntype.type["opacity"] = 0.3;
            btntype.type["shadowColor"] = '#000';
            btntype.type["shadowOpacity"] = 0.22;
            btntype.type["shadowRadius"] = 2.22;
            btntype.type["elevation"] = 3;  
            btntype.type["width"] = "100%";
        break;
        case 'Tonal':

        break;
        case true:
             
        break;

        default :
        // console.log('default case');
    }

    return btntype;
}