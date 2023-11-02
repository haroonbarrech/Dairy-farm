import React, {useState}from "react";

import {useDefaultQuery, applyMedia} from '../quries/useGridQuries';
import {TouchableOpacity,Pressable, View, TextInput, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import normalize from '../normalize/normalized';
import { MaterialIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../hooks/useTogglePasswordVisibility';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


  {/*
     <View style={{width: '100%'}}>
<Password 
  icon="eye"
  iconReplace="eye-with-line" 
/>

     </View>
  */}  




 export const Password = props => {

   const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();

   const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility(props.icon, props.iconReplace);

  const[myEmail,setEmail]=useState('')
  const[myPassword,setPassword]=useState('')



 

//console.log(props.icon);
    const styles = StyleSheet.create({
            maindiv: [
                {
                    // i phone 13 pro max
                    flexDirection:'row',
                    width:'100%',
                    borderWidth:0.5,
                    borderColor:'black',
                    backgroundColor:'white',
                    paddingTop:10,
                    paddingBottom:10,
                    borderRadius:10,
                }
                ,
                applyMedia(xsp, { //iphone 12 mini
                    paddingTop:8,
                    paddingBottom:8,
               
                  
                }),
                applyMedia(smp, { // i pad mini 6 th gen
                    paddingTop:normalize(10),
                    paddingBottom:normalize(10)
                   
                }),
                applyMedia(mdp, {   //i pad pro 9.7 ich
                  
                   
                    paddingTop:normalize(8),
                    paddingBottom:normalize(8),
                    
               
                }),
                applyMedia(xlp, { //i pad pro 12.9 inch
                    paddingTop:normalize(16),
                    paddingBottom:normalize(16),
                     
              
                }),
                applyMedia(xxlp, {
                    paddingTop:normalize(20),
                    paddingBottom:normalize(20),
                   
    
                     
                }),
                applyMedia(xsl, {
                    backgroundColor:'green'
                    
                     
                }),
                applyMedia(sml, { //i phone 8 ,i phone se 
                  
                    paddingTop:normalize(12),
                    paddingBottom:normalize(12),

                
                 
                }),
                applyMedia(mdl, { // i phone 13 pro max ,12 mini,13 mini, 11
                    backgroundColor:'pink',
                    paddingTop:normalize(8),
                    paddingBottom:normalize(8),
                
                }),
                applyMedia(xll, { // i  pad mini 6 th generation
            
                    
    
                     
                }),
                applyMedia(xxll, { // i pad pro 12.9 
                    paddingTop:normalize(14),
                    paddingBottom:normalize(14),
                     
                 
                     
                }),
               
            ],
            
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
          
        <View style={{width:'100%'}}>

<View style={[styles.maindiv, props.style]}>
        
            {
                props.iconleft ?       <View style={{width:'10%',justifyContent:'center',alignItems:'center'}}><MaterialIcons name={props.leftIconName}
                                         style={[styles.leftIconStyle, props.iconStyle]} /></View> : null
            }

            <View style={{width:'85%',backgroundColor:'red ',justifyContent:'center',paddingLeft:10}}>
            <TextInput
style={{width: '100%',}}
      onChangeText={props.onChange}
      value={props.value}
      maxLength={props.maxLength}
      secureTextEntry={passwordVisibility}
      placeholder=" Enter your password"
 />
            
               </View>
                <View style={{width:'10%',justifyContent:'center',alignItems:'center'}}>
               <Pressable onPress={handlePasswordVisibility}>
  <Entypo name={rightIcon} style={[styles.iconstyle ,props.eyestyle]} color="grey" styles={{width: '100%'}}  />
  </Pressable>
            </View>
           
            </View>
           
            </View>
    
    );


}

