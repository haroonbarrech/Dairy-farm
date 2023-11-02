import React from "react";
import { Text,View,Image } from "react-native";
import { GlobalStyles} from "../libs/layout/constants/Styles";
import { ScrollView } from "react-native-gesture-handler";
import { LeftIcon,H1,H5,FlatListView,Button,T1,T2,T3} from "../libs/layout/index";
import { Feather } from '@expo/vector-icons';

const DATA = [
    {
      id: 1,
      name: 'Junaid',
      name1: 'Owner-1',
      number: '0334-76534653',
      img: require('../../assets/c1.jpg'),
    },
  
    {
      id: 2,
      name: 'Hamza',
      name1: 'Owner-2',
      img: require('../../assets/c2.jpg'),
      number: '0301-6534987',
    },
    {
        id: 3,
        name: 'saad ',
        name1: 'Owner-3',
        img: require('../../assets/c2.jpg'),
        number: '0301-6534987',
      },
      {
        id: 4,
        name: 'Ali',
        name1: 'Owner-4',
        img: require('../../assets/c2.jpg'),
        number: '0301-6534987',
      },
  
  
  ]

const Contact=props=>{
    const GlobalStyle=GlobalStyles();
    return(
        <ScrollView style={{backgroundColor:'white'}}>
        <View style={[
            GlobalStyle.height100
            ,{padding:20,alignItems:'center'}]}>
            <Text style={[
                GlobalStyle.font14,
               GlobalStyle.fw7


            ,{}]}>
            You Can Contact Us the following number mentioned below 
            </Text>
                
        <FlatListView
data={DATA}
onRenderItem={(item) => {
return(
  <View style={{height:144,width:350,borderColor:'lightgrey',borderWidth:1,borderRadius:30,marginTop:20,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  
  elevation: 4,
  
  }}>
  <View style={{height:70,justifyContent:"space-evenly",alignItems:'center',flexDirection:'row',borderBottomWidth:1,borderColor:'grey'}}>
  <Text style={[
                GlobalStyle.font14,
               GlobalStyle.fw7


            ,{}]}>
          {item.name1}
            </Text>
  <Text style={[
                GlobalStyle.font14,
               GlobalStyle.fw7


            ,{}]}>
          {item.name}
            </Text>


  </View>
  <View style={{height:70,justifyContent:'space-evenly',alignItems:'center',flexDirection:'row'}}>
  <Feather name="phone" size={24} color="green" />
  <Text style={[
                GlobalStyle.font14,
               GlobalStyle.fw7


            ,{}]}>
          {item.number}
            </Text>


  </View>

  </View>



);
}}

/>

        </View>
        </ScrollView>
    )
}
export default Contact;