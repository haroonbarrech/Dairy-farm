import * as React from 'react';
import { useDefaultQuery, useMediaQuery, applyMedia } from '../quries/useMediaQuries';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, PixelRatio } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { normalize } from '../normalize/normalized';
import { Family } from "../constants/family";
import { StyleHelper } from '../constants/styleHelper'; 
import { useGrid } from '../grids';
import { btnType } from '../constants/btnHelper';
import { fs } from '../constants/fontHelper';

export const Button = (props)=>{

    const checkSome = btnType(props.type);
    const disabled = btnType(props.disabled);

    const {defaultTheme} = useGrid();
    const colors = defaultTheme.colors;
    const global = StyleHelper(props); 
 
    // console.log(props);

    const VerySmallDevice  = useMediaQuery({
        minWidth: 0,
        maxWidth: 390,
        orientation: 'portrait',
    });

    const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();

    const styles = StyleSheet.create({
        btnOuter:[ 
            {   
                minWidth: 64,
                borderStyle: 'solid',
                paddingHorizontal: 25,
                paddingVertical: 7,
                lineHeight: 0,
                marginVertical: 5, 
                alignItems: 'center',
                justifyContent: 'center',
                
            }, 
            applyMedia(VerySmallDevice, {
                padding: 12,
            })

        ],
        
        btnDefault:[ 
            {
                paddingHorizantal: 15,
                paddingVertical: 10, 
            }, 
            applyMedia(VerySmallDevice, {
                padding: 12,
            })

        ],

       
        
        btnText:[{
            color: colors.text, 
            fontSize: 12,
        },
            applyMedia(xsp, {
                fontSize: fs(10)
            }),
            applyMedia(smp, {
                fontSize: fs(14)
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

        leftIconStyle:[{
            color: colors.icon,
            fontSize: 20,   
            marginRight: 8,
        }],
        rightIconStyle:[{
            color: colors.icon,
            fontSize: 20,   
            marginLeft: 8,
        }], 
    });
    
    return(
        <TouchableOpacity 
        disabled = {props.disabled}
        style={[ 
             styles.btnOuter, 
             checkSome.type,
             disabled.type,
             props.btnOuterStyle, 
             global.padding, 
             global.margin, 
             global.ux, 
             global.flex,  
             ]} 
             onPress={props.onPress}>
            {
                props.leftIconName ?  <Ionicons name={props.leftIconName}
                                         style={[styles.leftIconStyle, props.iconStyle, global.iconSize]} /> : null
            }
            {
                props.loader ? <ActivityIndicator color={colors.icon} size={fs(30)} /> : null
            }
            

            <Text style={[styles.btnText,  props.btnTextStyle, disabled.type, global.font, ]}>
                {props.btnTitle}
            </Text>
            {
                props.rightIconName ?   <Ionicons name={props.rightIconName}
                                          style={[styles.rightIconStyle, props.iconStyle, global.iconSize]} /> : null
            }
        </TouchableOpacity>
        
    );




}








/*

usage of button 


<Button 
         rightIconName={'bookmark'}
         leftIconName={'bookmark'}
         title="title"
         style={{
           justifyContent: 'space-between',
         }}
         textStyle={{width:'100%'}}
         iconStyle={{position: 'absolute', right:15,}}
         onPress={() => {
           console.log('I am clicked');
         }}  
         mt = {30}
         fs = {[16, 20, 25, 30, 35]}
         iconSize = {[16, 18, 20, 22, 25]}
         pa={50}
         />













export const Button = props => {

    const {defaultTheme} = useGrid();
    const colors = defaultTheme.colors;
    const global = StyleHelper(props);
//  console.log(global);

   const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();
    
    let BodyBtn = TouchableOpacity;
  
    const styles = StyleSheet.create({
        buttonText: [
            {
                fontSize: normalize(16),
                textAlign: 'center',
                fontFamily: Family.Bold,
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
                backgroundColor: colors.button,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 10,
                paddingTop: 15,
                paddingHorizontal: 15,
                flexDirection: 'row',
                borderRadius: 15,
            },
            applyMedia(xsp, {
                paddingVertical: normalize(7)
            }),
            applyMedia(smp, {
                paddingVertical: normalize(8)
            }),
            applyMedia(mdp, {
                paddingVertical: normalize(9)
            }),
            applyMedia(xlp, {
                paddingVertical: normalize(10)
            }),
            applyMedia(xxlp, {
                paddingVertical: normalize(9)
            }),
            applyMedia(xsl, {
                paddingVertical: normalize(13)
            }),
            applyMedia(sml, {
                paddingVertical: normalize(15)
            }),
            applyMedia(mdl, {
                paddingVertical: normalize(13)
            }),
            applyMedia(xll, {
                paddingVertical: normalize(13)
            }),
            applyMedia(xxll, {
                paddingVertical: normalize(15)
            }),
        ],
        leftIconStyle: [
            {
                fontSize: 19,
                marginRight: 4,
                color: colors.icon,
            },
            applyMedia(xsp, {
                fontSize: normalize(17)
            }),
            applyMedia(smp, {
                fontSize: normalize(20)
            }),
            applyMedia(mdp, {
                fontSize: normalize(22)
            }),
            applyMedia(xlp, {
                fontSize: normalize(24)
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
        rightIconStyle: [
            {
                fontSize: 19,
                marginLeft: 4,
                color: colors.icon,
            },
            applyMedia(xsp, {
                fontSize: normalize(17)
            }),
            applyMedia(smp, {
                fontSize: normalize(20)
            }),
            applyMedia(mdp, {
                fontSize: normalize(22)
            }),
            applyMedia(xlp, {
                fontSize: normalize(24)
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
     

}
*/
