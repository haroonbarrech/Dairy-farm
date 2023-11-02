import React from 'react';
import {useDefaultQuery, useMediaQuery, applyMedia} from '../quries/useGridQuries';
import { Text, StyleSheet } from 'react-native';
import { normalize }from '../normalize/normalized';
import { Family } from '../constants/family';
import { StyleHelper } from '../constants/styleHelper';

import { fs } from '../constants/fontHelper';



export const H4 = props => {
    const colors = defaultTheme.colors;
    const global = StyleHelper(props);

   const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();

 
    const styles = StyleSheet.create({
        textStyle: [
            {
                fontSize: fs(19),
                fontWeight:'300',
                marginLeft: 4,
                fontFamily: Family.Regular,
                color: colors.text,

            },
            applyMedia(xsp, {
                fontSize: fs(20),
                
            }),
            applyMedia(smp, {
                fontSize: fs(25)
            }),
            applyMedia(mdp, {
                fontSize: fs(30)
            }),
            applyMedia(xlp, {
                fontSize: fs(35)
            }),
            applyMedia(xxlp, {
                fontSize: fs(40)
            }),
            applyMedia(xsl, {
                fontSize: fs(17)
            }), 
            applyMedia(sml, {
                fontSize: fs(28)
            }),
            applyMedia(mdl, {
                fontSize: fs(24)
            }),
            applyMedia(xll, {
                fontSize: fs(30)
            }),
            applyMedia(xxll, {
                fontSize: fs(40)
            }),
        ],
    });
    return(
       
          
            <Text style={[styles.textStyle, props.style, global.font, global.margin, global.padding]}>
                {props.children}
            </Text>
    
    );


}

