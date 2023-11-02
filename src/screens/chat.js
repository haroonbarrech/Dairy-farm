import React, {useEffect, useState} from 'react';
import { Text, View, TextInput, Alert,Image,TouchableOpacity, ImageBackground, SafeAreaView, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { LeftIcon,H1,H5, Email,Password,Button,CircularButton, ScrollListView} from "../libs/layout/index";
import { useSelector, useDispatch } from 'react-redux'
import { removeValue, getData } from "../constant/store";
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const Chat = props =>   {
  const [id, setID] = useState(null);
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',   
      lastName: ''
    }
  });


  useEffect(async() => {
    const data = await getData();
    setID(data);
  }, []);

  const onSubmit = data => {
    removeValue();
    props.navigation.navigate('LogIn');
  };
  const dispatch = useDispatch()
  const login = useSelector((state) => state.LogIn);
;


  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'white'}}>
      <View style={{height:60,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <TouchableOpacity onPress={()=>props.navigation.navigate('MainPage')}>
        <AntDesign style={{paddingLeft:8}}name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      
      <View style={{width:200,alignItems:'center'}}>
      <Text style={{fontSize:18,fontWeight:'500'}}>
          Full Snack Designer
        </Text>
        <Text style={{fontSize:12,fontWeight:'400'}}>
         7 Online from 12 peoples
        </Text>
</View>
<View style={{width:70,alignItems:'center',flexDirection:'row',justifyContent:'space-between',marginRight:10}}>
<TouchableOpacity>
        <FontAwesome name="video-camera" size={24} color="grey" />
        </TouchableOpacity>
       <TouchableOpacity>
       <SimpleLineIcons name="options-vertical" size={24} color="grey" />
       </TouchableOpacity>
</View>
        
        
      </View>
      <ScrollView style={{backgroundColor:'lightgrey'}}>

      

       
       
   
     <View style={{height:64,justifyContent:'center',alignItems:'center',flexDirection:'row',borderRadius:16}}>
        <View style={{justifyContent:'center',alignItems:'center',width:'20%'}}>
        <Image
        style={{width:60,height:60,borderRadius:30}}
        source={require('../../assets/p1.jpeg')}
      />
        </View>
        <View style={{justifyContent:'center',width:'60%'}}>
          <TouchableOpacity onPress={()=>props.navigation.navigate('')}>
          <H5>
            Darline Steward
            </H5>

          </TouchableOpacity>
    
         <Text>
            kdjk
         </Text>
     
        </View>
        <View style={{justifyContent:'center',alignItems:'center',width:'20%'}}>
         <Text>
            kdjk
         </Text>
         <Text>
            kdjk
         </Text>
        </View>
        </View>
   
   
        </ScrollView>
        <View style={{position:'relative',bottom:0,height:90,backgroundColor:'white',alignItems:'center',borderTopLeftRadius:80}}>
        <View style={{width:'100%',height:40,flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderColor:'grey',borderBottomWidth:1}}>
<Text style={{paddingLeft:10}}>
General
</Text>
<View  style={{justifyContent:'space-between',flexDirection:'row',width:'14%',marginRight:10}}>
  <TouchableOpacity>
  <Entypo name="chevron-small-up" size={14} color="black" />
  </TouchableOpacity>
  <TouchableOpacity>
  <SimpleLineIcons name="options-vertical" size={14} color="grey" />
  </TouchableOpacity>

        
</View>


</View>
<View style={{height:50,width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<View  style={{justifyContent:'space-between',flexDirection:'row',width:'6%',marginLeft:10}}>
  <TouchableOpacity>
  <Entypo name="emoji-neutral" size={24} color="grey" />
  </TouchableOpacity>

</View>
<View  style={{justifyContent:'space-between',flexDirection:'row',height:30,width:'60%'}}>
<TextInput
        style={{}}
     
        placeholder="Write A message"
        keyboardType="numeric"
      />
</View>
<View  style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',width:'14%',marginRight:50}}>
<TouchableOpacity>
<MaterialCommunityIcons style={{paddingRight:20}} name="paperclip" size={28} color="grey" />
</TouchableOpacity>

<View style={{backgroundColor:'#2F80ED',width:40,height:40,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
<TouchableOpacity>
<MaterialIcons name="keyboard-voice" size={24} color="white" />
</TouchableOpacity>


</View>

</View>

</View>
    
        

      </View>
 
    </SafeAreaView>
  );
}
export default Chat;