import React, {useEffect, useState} from 'react';
import { Text, View, TextInput, Alert,Image,TouchableOpacity, ImageBackground, SafeAreaView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { LeftIcon,H1,H5,FlatListView,Button,T1,T2,T3} from "../libs/layout/index";
import { useSelector, useDispatch } from 'react-redux'
import { removeValue, getData } from "../constant/store";
import { EvilIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';

const DATA = [
  {
    id: 1,
    name: 'New Jersey',
    img: require('../../assets/c1.jpg'),
  },

  {
    id: 2,
    name: 'Frozen',
    img: require('../../assets/c2.jpg'),
  },
  {
    id: 3,
    name: 'Frozen',
    img: require('../../assets/c3.jpg'),
  },
  {
    id: 4,
    name: 'Frozen',
    img: require('../../assets/c4.jpg'),
  },
  {
    id: 5,
    name: 'Frozen',
    img: require('../../assets/c5.jpeg'),
  },
  {
    id: 6,
    name: 'Frozen',
    img: require('../../assets/c6.jpg'),
  },
]

const MainPage = props =>   {
  const [id, setID] = useState(null);
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',   
      lastName: ''
    }
  });




 


  return (
    <SafeAreaView   style={{position:'absolute',height:'100%',alignItems: 'center',flex: 1,backgroundColor:'white'}}>


       
       
        <FlatListView
data={DATA}
onRenderItem={(item) => {
return(
  <View style={{height:144,width:'100%',borderColor:'lightgrey',borderWidth:1,

  flexDirection:'row',borderRadius:16,marginTop:10,
 
  
  }}>
    <TouchableOpacity style={{position:'absolute',right:10,top:10}}>
    <View style={{backgroundColor:'lightgrey',justifyContent:'center',alignItems:'center',
    height:20,width:20,borderRadius:40,}}>
    <AntDesign name="edit" size={16} color="black" />
    </View>
 
      
    </TouchableOpacity>
 
  <View style={{width:'35%',height:140,}}>
  <Image
        style={{height:140,width:'100%',borderBottomLeftRadius:16,borderTopLeftRadius:16}}
        source={item.img}
      />

  </View>
  <View style={{width:'25%',height:140,justifyContent:'space-around',alignItems:'center',borderRightWidth:1,borderColor:'grey'}}>
   
   <Text style={{fontSize:14,fontWeight:'700'}}>
   {item.name}
   </Text>
   <Text style={{fontWeight:'600'}}>
    Milking capacity
   </Text>
   <Text>
  20 litres
   </Text>
   

  </View>
  <View style={{justifyContent:'center',alignItems:'center',width:'39%'}}>

    <View style={{width:'100%',flexDirection:"row",justifyContent:'space-around'}}>
  <Text style={{fontWeight:'600'}}>
  Morning:
   </Text>
   <Text>
  2 litres
   </Text>
    </View>
    <View style={{width:'100%',flexDirection:"row",justifyContent:'space-around'}}>
  <Text style={{fontWeight:'600'}}>
  Afternoon:
   </Text>
   <Text>
  2 litres
   </Text>
    </View>
    <View style={{width:'100%',flexDirection:"row",justifyContent:'space-around'}}>
  <Text style={{fontWeight:'600'}}>
  Evening:
   </Text>
   <Text>
  2 litres
   </Text>
    </View>
  
  </View>
  </View>



);
}}

/>

{/*
<View style={{position:'relative',left:0,bottom:0,backgroundColor:'blue',justifyContent:"center",alignItems:'center',height:65,width:65,borderRadius:50}}>
<TouchableOpacity>
<AntDesign name="message1" size={30} color="white" />
</TouchableOpacity>


</View>
*/}

 
              
 
    </SafeAreaView>
  );
}
export default MainPage;