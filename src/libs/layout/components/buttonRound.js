import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { normalize } from '../normalize/normalized';
import { useDefaultQuery, useMediaQuery, applyMedia } from '../quries/useGridQuries';
import { StyleHelper } from '../constants/styleHelper';


export const RoundButton = props => {

  
    const colors = defaultTheme.colors;
    const global = StyleHelper(props);

   const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();

    let BodyBtn = TouchableOpacity;

    const hd = useMediaQuery({
        minWidth:900,
        maxWidth: 1600,
    
    });

 
    const styles = StyleSheet.create({
        buttonText: [
            {
                fontSize: normalize(16),
                textAlign: 'center',
                color: colors.text,
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
            {
                backgroundColor: colors.background, 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: 8,     
                width:40,
                height:40
                
              
                
            },
            applyMedia(xsp, { //iphone 12 mini
                width:normalize(31),
                height:normalize(31),
              
            }),
            applyMedia(smp, { // i pad mini 6 th gen
                width:normalize(36),
                height:normalize(36),
            }),
            applyMedia(mdp, {   //i pad pro 9.7 ich
                
                width:normalize(41),
                height:normalize(41),
            }),
            applyMedia(xlp, { //i pad pro 12.9 inch
                 
                width:normalize(51),
                height:normalize(51),
            }),
            applyMedia(xxlp, {
                 

                 
            }),
            applyMedia(xsl, {
                 
            }),
            applyMedia(sml, {
                 
            }),
            applyMedia(mdl, {
                 
            }),
            applyMedia(xll, {
                 
            }),
            applyMedia(xxll, {
                 
            }),
            applyMedia(hd, {
                fontSize: normalize(86),
                 
                
            }),
        ],
        mainIconStyle: [
            {
                fontSize: 26,
                color: colors.icon, 
             

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
                fontSize: normalize(25)
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