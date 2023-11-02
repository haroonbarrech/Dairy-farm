import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import color from 'color';
import { StyleHelper } from '../constants/styleHelper';
 
const Divider = props => {
   
  /*
========usage========
=> Add from libs components 

 <Divider color ="red"  thikness={.5} />

=> props 
color = "Red" 
thikness = {number}




 <Divider 
    ma={16}
    mh={16}
    mv={16}
    mt={16}
    mb={16}
    ml={16}
    mr={16}
    
    pa={[4, 5, 16, 7, 8]}
    ph={16}
    pv={16}
    pt={16}
    pb={16}
    pl={16}
    pr={16}  

    w={60}
    h={90}



    />



========usage========
*/
const global = StyleHelper(props);


  return ( 
      <View style={[styles.Line, 
       props.color? {backgroundColor: props.color} : null, 
       props.thikness? {paddingVertical: props.thikness} : null,
       global.margin]} />     
  );
};
 

const styles = StyleSheet.create({
  Line:[{
      width: '100%',
      paddingVertical: .3,
      backgroundColor: '#101010',
      marginTop: 5,
  }],
});

export { Divider } ;
