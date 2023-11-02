import React, {useState}from "react";
import {useDefaultQuery, applyMedia} from '../quries/useGridQuries';
import {TouchableOpacity,Pressable, View, TextInput, StyleSheet} from 'react-native';
import normalize from '../normalize/normalized';
import { AntDesign } from '@expo/vector-icons';


  {/*
     <View style={{width: '100%'}}>
<Password 
  icon="eye"
  iconReplace="eye-with-line" 
/>

     </View>
  */}  




 export const LeftIcon = props => {

   const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();

//console.log(props.icon);
    const styles = StyleSheet.create({ 
                iconstyle: [
                    
                        // i phone 13 pro max
                        {fontSize:normalize(22)},


                    applyMedia(xsp, { //iphone 12 mini
                        fontSize:normalize(18)
                   
                      
                    }),
                    applyMedia(smp, { // i pad mini 6 th gen
                        fontSize:normalize(26)
                       
                    }),
                    applyMedia(mdp, {   //i pad pro 9.7 ich
                        fontSize:normalize(28),
                
                    }),
                    applyMedia(xlp, { //i pad pro 12.9 inch
                         
                        fontSize:normalize(30),
                    }),
                    applyMedia(xxlp, {
                        fontSize:normalize(32),
                       
        
                         
                    }),
                    applyMedia(xsl, {
                        
                        fontSize:normalize(16),
                    }),
                    applyMedia(sml, { //i phone 8 
                        fontSize:normalize(22),
                     
                    }),
                    applyMedia(mdl, { // i phone 13 pro max ,12 mini,13 mini, 11
                        fontSize:normalize(22),
                    
                    }),
                    applyMedia(xll, { // i  pad mini 6 th generation
                        fontSize:normalize(30),    
                    }),
                    applyMedia(xxll, { // i pad pro 12.9 
                        fontSize:normalize(34),
                         
                    }),
                   
                ],
      
    });
    return(
  
        <TouchableOpacity onPress={props.onPress}>
<AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        

        
          
       
    
    );


}

