import React from 'react';
import {useDefaultQuery, useMediaQuery, applyMedia} from '../quries/useMediaQuries';
import { Text, StyleSheet } from 'react-native';
import { normalize }from '../normalize/normalized';
import { Family } from '../constants/family';
import { StyleHelper } from '../constants/styleHelper';
import { useGrid } from '../grids';
import { fs } from '../constants/fontHelper';



 export const H5 = props => {

    const {defaultTheme} = useGrid();
    const colors = defaultTheme.colors;
    const global = StyleHelper(props);

   const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();

    const styles = StyleSheet.create({
        textStyle: [
            {
                fontSize: fs(19),
                fontWeight:'200',
                marginLeft: 4,
                color: colors.text,
                fontFamily: Family.Regular,

            },
            applyMedia(xsp, {
                fontSize: fs(15),
                
            }),
            applyMedia(smp, {
                fontSize: fs(30)
            }),
            applyMedia(mdp, {
                fontSize: fs(22)
            }),
            applyMedia(xlp, {
                fontSize: fs(40)
            }),
            applyMedia(xxlp, {
                fontSize: fs(26)
            }),
            applyMedia(xsl, {
                fontSize: fs(17)
            }), 
            applyMedia(sml, {
                fontSize: fs(24)
            }),
            applyMedia(mdl, {
                fontSize: fs(22)
            }),
            applyMedia(xll, {
                fontSize: fs(23)
            }),
            applyMedia(xxll, {
                fontSize: fs(35)
            }),
        ],
    });
    return(
       
          
            <Text style={[styles.textStyle, props.style, global.font, global.margin, global.padding]}>
                {props.children}
            </Text>
    
    );


}

