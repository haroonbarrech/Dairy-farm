import React from 'react';
import {useDefaultQuery, useMediaQuery, applyMedia} from '../quries/useMediaQuries';
import { Text, StyleSheet } from 'react-native';
import { normalize }from '../normalize/normalized';
import { Family } from '../constants/family';
import { StyleHelper } from '../constants/styleHelper';
import { useGrid } from '../grids';
import { fs } from '../constants/fontHelper';



export const H3 = props => {

    const {defaultTheme} = useGrid();
    const colors = defaultTheme.colors;
    const global = StyleHelper(props);

   const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();

 
    const styles = StyleSheet.create({
        textStyle: [
            {
                fontSize: fs(19),
                fontWeight:'400',
                marginLeft: 4,
                fontFamily: Family.Regular,
                color: colors.text,

            },
            applyMedia(xsp, {
                fontSize: fs(24),
                
            }),
            applyMedia(smp, {
                fontSize: fs(30)
            }),
            applyMedia(mdp, {
                fontSize: fs(35)
            }),
            applyMedia(xlp, {
                fontSize: fs(40)
            }),
            applyMedia(xxlp, {
                fontSize: fs(50)
            }),
            applyMedia(xsl, {
                fontSize: fs(25)
            }),
            applyMedia(sml, {
                fontSize: fs(30)
            }),
            applyMedia(mdl, {
                fontSize: fs(35)
            }),
            applyMedia(xll, {
                fontSize: fs(40)
            }),
            applyMedia(xxll, {
                fontSize: fs(45)
            }),
        ],
    });
    return(
       
          
        <Text style={[styles.textStyle, props.style, global.font, global.margin, global.padding]}>
        {props.children}
    </Text>
    
    );


}
