import React from 'react';
import {useDefaultQuery,useMediaQuery,applyMedia} from '../quries/useGridQuries';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import normalize from '../normalize/normalized';



export const T3 = props => {

   const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();
   const hd = useMediaQuery({
    minWidth:1366,
    maxWidth: 1466,
    orientation: 'portrait',
});

    let BodyBtn = TouchableOpacity;

console.log(xsp);
    const styles = StyleSheet.create({
       textStyle:[ {
        fontSize: normalize(14),
            fontWeight:'400',
            }
            ,
            applyMedia(xsp, { //iphone 12 mini // i phone 13 pro max
                fontSize: normalize(14),
            }),
            applyMedia(smp, { // i pad mini 6 th gen
                fontSize: normalize(16),
            }),
            applyMedia(mdp, {   //i pad pro 9.7 ich
                fontSize: normalize(18),
            }),
            applyMedia(xlp, { //i pad pro 12.9 inch
                fontSize: normalize(20),  
            }),
            applyMedia(xxlp, {    // apple  tv   
                fontSize: normalize(22),          
            }),
            applyMedia(xsl, {
                fontSize: normalize(14),
        
            }),
            applyMedia(sml, { //i phone 8 ,i phone se 
                fontSize: normalize(14),  
            }),
            applyMedia(mdl, { // i phone 13 pro max ,12 mini,13 mini, 11
                fontSize: normalize(16),
            }),
            applyMedia(xll, { // i  pad mini 6 th generation  //i pad pro 9.7 inch
                fontSize: normalize(18),
            }),
            applyMedia(xxll, { // i pad pro 12.9     
                fontSize: normalize(20),    
            }),
           
        ],
    });
    return(
       
          
            <Text style={[styles.textStyle]}>
                {props.children}
            </Text>
    
    );


}

