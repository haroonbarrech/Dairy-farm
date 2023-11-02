import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import { StyleHelper } from '../constants/styleHelper'; 
import { useGrid } from '../grids';

export const Box = (props)=>{
const {defaultTheme} = useGrid();
const colors = defaultTheme.colors;
const global = StyleHelper(props);
// console.log(global);

const styles = StyleSheet.create({
    box:[{
        width: "100%",
        padding: 16,
        backgroundColor: colors.background,
    }]
});

return(<View style={[styles.box, props.style, global.flex, global.margin, global.padding, global.ux]}>
    {props.children}
</View>);

}


