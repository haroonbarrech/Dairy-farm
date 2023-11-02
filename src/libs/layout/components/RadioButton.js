import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import normalize from '../normalize/normalized';
import {useDefaultQuery, applyMedia} from '../quries/useGridQuries';
import { ScaledSize } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';




export const defaultSize = 64;

export const RadioButton = props  => {
  const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();

  const [IconVisibility, setIconVisibility] = React.useState(false);

  let Radio = TouchableOpacity;
  
const styles = StyleSheet.create({

  iconStyle: [
    {     backgroundColor:'grey',
    
    justifyContent:'center',
    alignItems:'center',
    width:20,
    height:20,
    borderRadius:40
    },
      applyMedia(xsp, { //iphone 12 mini
          width:normalize(50),
          height:normalize(50),
  
        
      }),
      applyMedia(smp, { // i pad mini 6 th gen
          width:normalize(70),
          height:normalize(70),
          borderRadius:50
      }),
      applyMedia(mdp, {   //i pad pro 9.7 ich
          
          width:normalize(80),
          height:normalize(80),
          borderRadius:60
      }),
      applyMedia(xlp, { //i pad pro 12.9 inch
           
          width:normalize(88),
          height:normalize(88),
          borderRadius:60
      }),
      applyMedia(xxlp, {
         

           
      }),
      applyMedia(xsl, {
          backgroundColor:'red',
           
      }),
      applyMedia(sml, {
     
          width:normalize(65),
          height:normalize(65),
           
      }),
      applyMedia(mdl, { // i phone 13 pro max
          backgroundColor:'yellow',
          width:normalize(65),
          height:normalize(65),
          borderRadius: 50,  
           
      }),
      applyMedia(xll, { // i  pad mini 6 th generation
          width:normalize(75),
          height:normalize(75),
            borderRadius:50,

        

           
      }),
      applyMedia(xxll, { // i pad pro 12.9 
          width:normalize(100),
          height:normalize(100),
          borderRadius:70,
       
           
      }),
     
  ], 
});



const changeVisibility = () => {
  setIconVisibility(!IconVisibility)
  props.onchange(IconVisibility)
};
  
  
  return (

   <Radio
    onPress={changeVisibility}
   style={{borderWidth:3,borderColor:"black",borderRadius:40,height:35,width:35,
   justifyContent:'center',alignItems:'center'}}>
   {
    IconVisibility? <FontAwesome name="circle" size={24} color="black" /> : null
   }
   
 
   </Radio>
  );
};




