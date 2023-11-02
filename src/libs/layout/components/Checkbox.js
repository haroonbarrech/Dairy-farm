import  React, {useState}  from 'react';
import { StyleSheet,TouchableOpacity,  View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import normalize from '../normalize/normalized';
import {useDefaultQuery, applyMedia} from '../quries/useGridQuries';
import { ScaledSize } from 'react-native';





export const defaultSize = 64;

export const CheckBoxT = props  => {
  const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();
  const [IconVisibility, setIconVisibility] = React.useState(false);
let Checkbox= TouchableOpacity;
  
const styles = StyleSheet.create({
  mainDiv: [
    {        borderWidth:1,
      borderColor:"black"
      ,borderRadius:8,
      height:38,
      width:38,
   justifyContent:'center',
   alignItems:'center'},
      applyMedia(xsp, { //iphone 12 minI
     
        borderRadius:8,
        height:38,
        width:38,
  
        
      }),
      applyMedia(smp, { // i pad mini 6 th gen
       
      }),
      applyMedia(mdp, {   //i pad pro 9.7 ich
          
         
      }),
      applyMedia(xlp, { //i pad pro 12.9 inch
           
          
      }),
      applyMedia(xxlp, {
         

           
      }),
      applyMedia(xsl, {
          backgroundColor:'red',
           
      }),
      applyMedia(sml, {
     
          
      }),
      applyMedia(mdl, { // i phone 13 pro max
        width:normalize(32),
        height:normalize(32),

          
         
    
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

  iconStyle: [
    { 
      fontSize:normalize(28),    
    },

      applyMedia(xsp, { //iphone 12 mini
        fontSize:normalize(28),  
        
      }),
      applyMedia(smp, { // i pad mini 6 th gen
        fontSize:normalize(28),  
      }),
      applyMedia(mdp, {   //i pad pro 9.7 ich
          
        fontSize:normalize(28),  
      }),
      applyMedia(xlp, { //i pad pro 12.9 inch
           
        fontSize:normalize(28),  
      }),
      applyMedia(xxlp, {
        fontSize:normalize(28),   
      }),
      applyMedia(xsl, {
        fontSize:normalize(28),  
           
      }),
      applyMedia(sml, {
     
        fontSize:normalize(28),  
           
      }),
      applyMedia(mdl, { // i phone 13 pro max
        fontSize:normalize(28),   
      }),
      applyMedia(xll, { // i  pad mini 6 th generation
        fontSize:normalize(28),             
      }),
      applyMedia(xxll, { // i pad pro 12.9 
        fontSize:normalize(28),   
           
      }),
    
  ], 
});



const changeVisibility = () => {
  setIconVisibility(!IconVisibility)
  props.onchange(IconVisibility)
};
  
  
  return (

   <Checkbox
    onPress={changeVisibility}
   style={styles.mainDiv}>
   {
    IconVisibility?<Ionicons name="md-checkmark" color="black" style={styles.iconStyle} />: null
   }
   
 
   </Checkbox>

  );
};



