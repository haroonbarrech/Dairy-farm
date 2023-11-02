import React from 'react';
import {useDefaultQuery, useMediaQuery, applyMedia} from '../quries/useMediaQuries';
import { Text, StyleSheet } from 'react-native';
import { normalize }from '../normalize/normalized';
import { Family } from '../constants/family';
import { StyleHelper } from '../constants/styleHelper';
import { useGrid } from '../grids';
import { fs } from '../constants/fontHelper';




export const H1 = props => {
    const {defaultTheme} = useGrid();
    const colors = defaultTheme.colors;
    const global  =  StyleHelper(props);
     

   const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();

   const hd = useMediaQuery({
        minWidth:1366,
        maxWidth: 1466,
        orientation: 'portrait',
    });
 


    const styles = StyleSheet.create({
        textStyle: [
            {
                fontSize: fs(19),
                fontWeight:'600',
                marginLeft: 4,
                color: colors.text,
                fontFamily: Family.SemiBold,

            },


            applyMedia(xsp, {
                fontSize: fs(31),
                
            }),
            applyMedia(smp, {
                fontSize: fs(55)
            }),
            applyMedia(mdp, {
                fontSize: fs(60)
            }),
            applyMedia(xlp, {
                fontSize: fs(75)
            }),
            applyMedia(xxlp, {
                fontSize: fs(46)
                
            }),
            applyMedia(hd, {
                fontSize: fs(67)
            }),
            applyMedia(xsl, {
                fontSize: fs(30)
            }),
            applyMedia(sml, {
                fontSize: fs(45)
            }),
            applyMedia(mdl, {
                fontSize: fs(38)
            }),
            applyMedia(xll, {
                fontSize: fs(60)
            }),
            applyMedia(xxll, {
                fontSize: fs(75)
            }), 
        ],
    });
    return( 
            <Text style={[styles.textStyle, props.style, global.font, global.margin, global.padding]}>
                {props.children}
            </Text> 
    );


}

