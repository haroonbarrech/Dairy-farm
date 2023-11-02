import React from 'react';
import {useDefaultQuery,useMediaQuery,applyMedia} from '../quries/useGridQuries';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import normalize from '../normalize/normalized';



export const H1 = props => {

   const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();
   const hd = useMediaQuery({
    minWidth:1366,
    maxWidth: 1466,
    orientation: 'portrait',
});

    let BodyBtn = TouchableOpacity;

console.log(xsp);
    const styles = StyleSheet.create({
        textStyle: [
            {
                fontSize:16,
                fontWeight:'500',
                marginLeft: 4,
                color: 'black',

            },
            applyMedia(xsp, {
                fontSize: normalize(31),
                
            }),
            applyMedia(smp, {
                fontSize: normalize(55)
            }),
            applyMedia(mdp, {
                fontSize: normalize(60)
            }),
            applyMedia(xlp, {
                fontSize: normalize(75)
            }),
            applyMedia(xxlp, {
                fontSize: normalize(46)
                
            }),
            applyMedia(hd, {
                fontSize: normalize(67)
            }),
            applyMedia(xsl, {
                fontSize: normalize(30)
            }),
            applyMedia(sml, {
                fontSize: normalize(45)
            }),
            applyMedia(mdl, {
                fontSize: normalize(38)
            }),
            applyMedia(xll, {
                fontSize: normalize(60)
            }),
            applyMedia(xxll, {
                fontSize: normalize(75)
            }),
        ],
    });
    return(
       
          
            <Text style={[styles.textStyle]}>
                {props.children}
            </Text>
    
    );


}

