import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Sae from '../libs/theme/components/input/Sae';
import { FontAwesome } from '@expo/vector-icons';

const FormScreen = ()=>{
    return(
        <View style={[styles.card2,]}>
        <Text style={styles.title}>Sae</Text>
        <Sae
          label={"Email Address"}
          iconClass={FontAwesome}
          iconName={"pencil"}
          iconColor={"#101010"} 
        />
        <Sae
          label={"Individual"}
          iconClass={FontAwesome}
          iconName={"book"}
          iconColor={"#101010"} 
        />
         
         
      </View>
    
    );
}

const styles = StyleSheet.create({ 
     
      card2: {
        padding: 16, 
      },
      input: {
        marginTop: 34,  
      },
      title: {
        paddingBottom: 16,
        textAlign: "center",
        color: "#404d5b",
        fontSize: 20,
        fontWeight: "bold",
        opacity: 0.8,
      },
       
});

export default FormScreen;