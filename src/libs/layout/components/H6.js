import React from 'react';
import {useDefaultQuery, applyMedia} from '../quries/useGridQuries';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import normalize from '../normalize/normalized';


 export const H6 = props => {

   const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();

    let BodyBtn = TouchableOpacity;

console.log(xsp);
    const styles = StyleSheet.create({
        text1: [
      
            //LOGIN
        {fontSize:12,
        fontWeight:'200',
        
        }
        ,
        applyMedia(xsp, { //iphone 12 mini // i phone 13 pro max
            fontSize: normalize(12)
        }),
        applyMedia(smp, { // i pad mini 6 th gen
            fontSize: normalize(40),
        }),
        applyMedia(mdp, {   //i pad pro 9.7 ich
            fontSize: normalize(42),
        }),
        applyMedia(xlp, { //i pad pro 12.9 inch
            fontSize: normalize(50),  
        }),
        applyMedia(xxlp, {             
        }),
        applyMedia(xsl, {
            backgroundColor:'green'    
        }),
        applyMedia(sml, { //i phone 8 ,i phone se 
         
        }),
        applyMedia(mdl, { // i phone 13 pro max ,12 mini,13 mini, 11
            fontSize: normalize(42),
        }),
        applyMedia(xll, { // i  pad mini 6 th generation  //i pad pro 9.7 inch
            fontSize: normalize(44),
        }),
        applyMedia(xxll, { // i pad pro 12.9  
            fontSize: normalize(50),      
        }),
       
    ],
    });
    return(
       
          
            <Text style={[styles.textStyle]}>
                {props.children}
                {props.color}
            </Text>
    
    );


}

