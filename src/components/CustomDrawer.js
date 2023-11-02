import React from "react";
import { Text,View ,ImageBackground,Image,Alert} from "react-native";
import { DrawerContentScrollView,DrawerContent, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { LeftIcon,H1,H5,FlatListView,Button,T1,T2,T3} from "../libs/layout/index";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SwipeButton } from 'react-native-expo-swipe-button';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"
import {useDispatch} from 'react-redux';
import * as loginAction from '../store/actions/loginActions'; 




const CustomDrawer=props=>{
  const navigation = useNavigation();
  const dispatch = useDispatch();

    return(
        <View style={{flex:1,}}>
               <View style={{justifyContent:'center',alignItems:'center',backgroundColor:"pink",
               height:300}}>
     <ImageBackground 
         source={require('../../assets/i1.jpeg')}
     resizeMode="cover" style={{width:'100%',height:300}}>
         <View style={{justifyContent:'center',alignItems:'center',height:330}}>
         <Image
        style={{height:190,width:190,position:'relative',borderRadius:100,margin:10}}
        source={require('../../assets/img.jpeg')}
      />
      <Text style={{color:'white',fontSize:20,fontWeight:'600',paddingLeft:10}}>
        Haroon
      </Text>
      <Text style={{color:'white',fontSize:16,fontWeight:'600',paddingLeft:10}}>
        haroonbarrech0335@gmail.com
      </Text>
      </View>
    
    
    </ImageBackground>
   </View>

        
   <DrawerContentScrollView {...props}>
    <DrawerItemList{...props}/>
    <View style={{justifyContent:'flex-end',alignItems:'center',height:190}}>
       <View style={{justifyContent:'center',alignItems:'center'}}>

       <View style={{height:10,marginTop:10,alignContent:'center',justifyContent:'center'}}>
       <SwipeButton
        Icon={
          <MaterialIcons name="keyboard-arrow-right" size={50} color="white" />
        }
        onComplete={() => props.navigation.navigate.closeDrawers()}
        title="Swipe To Close Drawer"
        borderRadius={180}
        width={270}
  
        containerGradientProps={{
          colors: ['#3422F2', '#aa18ea'],
      
          start: [0, 0.5],
          end: [1, 0.5],
        }}
        underlayTitle="Release to complete"
        underlayStyle={{
          borderRadius: 180,
        }}
        underlayContainerGradientProps={{
          colors: ['#3422F2', '#aa18ea'],
         
          start: [0, 0.5],
          end: [1, 0.5],
        }}
      />
      </View>
    <View style={{ width:"90%", backgroundColor:'#3422F2',borderRadius:90,marginTop:70,height:50}}>
          
           
          <Button
                 iconRight={false}
                 rightIconName={'bookmark'}
                 iconleft={false}
                 leftIconName={'bookmark'}
                 title='LogOut'
               onPress={()=> {
                AsyncStorage.clear().then(() => {
                  dispatch(loginAction.logout()) 
                  Alert.alert('You have been Logged Out')
                });
               }}
                
                 style={{
                   justifyContent: 'space-between',backgroundColor:' #3422F2'
                 }}
                 textStyle={{width:'100%',fontSize:20,fontWeight:'700'}}
                 iconStyle={{position: 'absolute', left:15,}}
             />
             </View>
             </View>
             </View>

   </DrawerContentScrollView>
 
  
   </View>

    )
} 


export default CustomDrawer;