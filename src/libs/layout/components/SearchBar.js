import React from 'react';
import {useDefaultQuery, applyMedia} from '../quries/useGridQuries';
import {TouchableOpacity, View, TextInput, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import normalize from '../normalize/normalized';



 export const SearchBar = props => {

   const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();

 

console.log(xsp);
    const styles = StyleSheet.create({
            btnOuter: [
                {
                    // i phone 13 pro max
                       flexDirection:'row',
                    width:'100%',
                    backgroundColor:'lightgrey',
                    paddingTop:10,
                    paddingBottom:10,
                    borderRadius:15,
                },
                applyMedia(xsp, { //iphone 12 mini
               
                  
                }),
                applyMedia(smp, { // i pad mini 6 th gen
                    width:normalize(60),
                    height:normalize(60),
                }),
                applyMedia(mdp, {   //i pad pro 9.7 ich
                    
                    width:normalize(65),
                    height:normalize(65),
                }),
                applyMedia(xlp, { //i pad pro 12.9 inch
                     
                    width:normalize(75),
                    height:normalize(75),
                }),
                applyMedia(xxlp, {
                   
    
                     
                }),
                applyMedia(xsl, {
                    backgroundColor:'red',
                     
                }),
                applyMedia(sml, { //i phone 8 
                    width:normalize(65),
                    height:normalize(65),
                    borderRadius: 50,  
                 
                }),
                applyMedia(mdl, { // i phone 13 pro max
              
                }),
                applyMedia(xll, { // i  pad mini 6 th generation
                    width:normalize(70),
                    height:normalize(70),
                    
    
                     
                }),
                applyMedia(xxll, { // i pad pro 12.9 
                    width:normalize(85),
                    height:normalize(85),
                    borderRadius:70,
                     
                }),
               
            ],
      
      
    });
    return(
       
        <View style={{width:'100%'}}>

            <View style={styles.btnOuter}>
            <View style={{width:'10%',alignItems:'center'}}>

            <Ionicons name="search" size={24} color="black" />
            </View>
            <View style={{width:'90%',justifyContent:'center',paddingLeft:10}}>
            <TextInput
        style={styles.input}
        placeholder="Search here"
        keyboardType="numeric"
      /> 
            
               </View>
           
            </View>
            </View>
    
    );


}

