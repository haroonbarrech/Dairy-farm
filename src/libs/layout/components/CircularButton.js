import React from 'react';
import {useDefaultQuery, useMediaQuery, applyMedia} from '../quries/useGridQuries';
import {TouchableOpacity, Dimensions,StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import normalize from '../normalize/normalized';


export const CircularButton = props => {

   const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();

    let BodyBtn = TouchableOpacity;

    const hd = useMediaQuery({
        minWidth:900,
        maxWidth: 1600,
    
    });
    const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

console.log(windowWidth);

    const styles = StyleSheet.create({
        buttonText: [
            {
                fontSize: normalize(16),
                textAlign: 'center',
                color: 'blue',
                textTransform: 'capitalize',

            },

            applyMedia(xsp, {
                fontSize: normalize(19)
            }),
            applyMedia(smp, {
                fontSize: normalize(22)
            }),
            applyMedia(mdp, {
                fontSize: normalize(28)
            }),
            applyMedia(xlp, {
                fontSize: normalize(32)
            }),
            applyMedia(xxlp, {
                fontSize: normalize(36)
            }),
           
            applyMedia(xsl, {
                fontSize: normalize(17)
            }),
            applyMedia(sml, {
                fontSize: normalize(20)
            }),
            applyMedia(mdl, {
                fontSize: normalize(20)
            }),
            applyMedia(xll, {
                fontSize: normalize(23)
            }),
            applyMedia(xxll, {
                fontSize: normalize(26)
            }),
        ],
        btnOuter: [
            {// i phone 13 pro max
                backgroundColor: 'lightgrey', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width:normalize(81),
                height:normalize(31),
                borderRadius:30,   
            },
            applyMedia(xsp, { //iphone 12 mini
                width:normalize(92),
                height:normalize(64),
                borderRadius:24, 
              
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
                backgroundColor:'yellow',
                width:normalize(65),
                height:normalize(65),
                borderRadius: 50,  
                 
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
        mainIconStyle: [
            {
                fontSize: 26,
                color: 'grey', 
             

            },
            applyMedia(xsp, {
                fontSize: normalize(20)
                
            }),
            applyMedia(smp, {
                fontSize: normalize(24)
            }),
            applyMedia(mdp, {
                fontSize: normalize(28)
            }),
            applyMedia(xlp, {
                fontSize: normalize(36)
            }),
            applyMedia(xxlp, {
                fontSize: normalize(26)
            }),
            applyMedia(xsl, {
                fontSize: normalize(17)
            }),
            applyMedia(sml, {
                fontSize: normalize(20)
            }),
            applyMedia(mdl, {
                fontSize: normalize(20)
            }),
            applyMedia(xll, {
                fontSize: normalize(23)
            }),
            applyMedia(xxll, {
                fontSize: normalize(45)
            }),
        ],
    
    });
    return(
        <BodyBtn style={[styles.btnOuter, props.style]} onPress={props.onPress}>
            
             <Ionicons 
                name={props.icon}                   
                style={[styles.mainIconStyle, props.iconStyle]} /> 
        </BodyBtn>
    );
}
