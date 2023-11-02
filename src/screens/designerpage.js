import React from "react";
import { Text, View ,ScrollView,Image} from "react-native";


const Designerpage =props=>{
    return(
    <ScrollView style={{backgroundColor:'white',display:"flex",flex:1}}>
    <View style={{
        justifyContent: "center",
        alignItems:'center',
        backgroundColor: 'lightgrey',
        padding:20,
        margin:20
       }}>
 
 <Text style={{justifyContent:'center',alignItems:'center',fontSize:40}}>
 Cart screen 1 
 </Text>
    </View>

  <View style={{
     justifyContent:'center',
      backgroundColor: 'green',
      margin: 10,
      height:400}}>

<Image
          style={{
            resizeMode: 'center',
            height: 400,
            width: 400,
          }}
          source={require('../../assets/img.jpeg')}
        />
  </View>
  <View style={{
     justifyContent:'center',
      backgroundColor: 'green',
      margin: 10,
      height:400}}>

<Image
          style={{
            resizeMode: 'center',
            height: 400,
            width: 400,
          }}
          source={require('../../assets/img.jpeg')}
        />
  </View>
    </ScrollView>
)};




export default Designerpage;