import React from 'react';
import {useDefaultQuery, useMediaQuery, applyMedia} from '../../layout/quries/useGridQuries';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import normalize from '../normalize/normalized';
import { family } from "../constants/family";


/*

Button usage with full props.....

<Button
            iconRight={false}
            rightIconName={'bookmark'}
            iconleft={true}
            leftIconName={'bookmark'}
            title="title"
            style={{
              justifyContent: 'space-between',
            }}
            textStyle={{width:'100%'}}
            iconStyle={{position: 'absolute', left:15,}}
        />



*/





export const Button = props => {

   const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();

    let BodyBtn = TouchableOpacity;


    const name = useMediaQuery({
        minWidth: 1193,
        maxWidth: 1366,

        orientation: 'landscape',
    });
    
    const styles = StyleSheet.create({
        buttonText: [
            {
                fontSize: normalize(16),
                textAlign: 'center',
                fontFamily: family.Bold,
                color: 'white',
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
                backgroundColor: '#DB3022',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 28,
                paddingHorizontal: 28,
                flexDirection: 'row',
                borderRadius: 28,
            },
            applyMedia(xsp, {
                paddingVertical: normalize(10)
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
                color: 'black',


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
                color: 'black',

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
    return(
        <View style={{width:'100%'}}>
        <BodyBtn style={[styles.btnOuter, props.style]} onPress={props.onPress}>
            {
                props.iconleft ?  <Ionicons name={props.leftIconName}
                                         style={[styles.leftIconStyle, props.iconStyle]} /> : null
            }
            <Text style={[styles.buttonText, props.textStyle]}>
                {props.title}
            </Text>
            {
                props.iconRight ?   <Ionicons name={props.rightIconName}
                                          style={[styles.rightIconStyle, props.iconStyle]} /> : null
            }
        </BodyBtn>
        </View>
    );


}

