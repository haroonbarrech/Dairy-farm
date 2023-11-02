import * as React from 'react';
import { 
  StyleSheet,
  View, 
} from 'react-native';



 
export const Surface =(props)=>{


/*
========usage========
=> Add from libs components -> Surface

 <Surface elevation={4} color ="black" padding={12} bgColor="pink" ph={30} pv={50} alignItems="center" mt={10} mb={0}>
        <Text>This is elevation</Text>
      </Surface>

=> props 
elevation = {number} 
color = "black"
padding = {number} 
bgColor = "pink" 
ph = {number} padding Horizantal
pv = {number} padding Vertical
alignItems = "center"
mt = {number} margin Top
mb = {number} margin Bottom

========usage========
*/




return(
<View style={[ 
  styles.surface,  
  props.elevation? {elevation: props.elevation} : null, 
  props.color? {shadowColor: props.color} : null,
  props.padding? {padding: props.padding } : null,
  props.bgColor? {backgroundColor: props.bgColor } : null,
  props.bgColor? {backgroundColor: props.bgColor } : null,
  props.ph? {paddingHorizontal: props.ph} : null,
  props.pv? {paddingVertical: props.pv} : null,
  props.alignItems? {alignItems: props.alignItems} : null,
  props.mt? {marginTop: props.mt} : null,
  props.mb? {marginBottom: props.mb} : null,
  props.style? props.style : null,

  ]}>
    {props.children}
</View>
  );
}

const obj = {
  surface:[{
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.17,
    shadowRadius: 3.05,
    elevation: 4, 
    padding: 15,
}],
  
}

const styles = StyleSheet.create(obj);

 