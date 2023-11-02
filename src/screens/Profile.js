
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { getDatabase, ref, set } from "firebase/database";

import { View,Text,StyleSheet,TouchableOpacity,Image,Alert, ActivityIndicator} from "react-native";
import {Email,Button,} from "../libs/layout/index";
import { useForm, Controller } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useDefaultQuery, useMediaQuery, applyMedia} from '../libs/layout/quries/useGridQuries';
import normalize from '../libs/layout/normalize/normalized';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { GlobalStyles } from "../libs/layout/constants/Styles";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
//------------------------------------------------------




let schema= yup.object().shape({
    name:yup.
    string()
    .required("Please Fill the Name Field"),
     Gender:yup.
    string()
    .required("Please Fill the Gender Field"),
    Age:yup.
    string()
    .required("Please Fill the Age Field"),
    Cast:yup.
    string()
    .required("Please Fill the Breed Field"),
   milkcap:yup.
    string()
    .required("Please Fill the Required field"),

  
})




const Profile=props=>{

    const [image, setImage] = useState(null);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: '10 litres', value: '10lit'},
      {label: '20 litres', value: '20lit'},
      {label: '30 litres', value: '30lit'},
      {label: '40 litres', value: '40lit'},
      {label: '50 litres', value: '50lit'},
    ]);
    const [open1, setOpen1] = useState(false);
    const [value1, setValue1] = useState(null);
    const [items1, setItems1] = useState([
        {label: 'Male', value: 'Male'},
        {label: 'Female', value: 'Female'},
      ]);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(result);

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
    
    const [icon, setIcon] = React.useState(false);
    const GlobalStyle=GlobalStyles();
    const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();
    const [loading, setLoading] = useState(false); // activity indicator
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
          name: '', 
        Age: '',
          Gender:'',
          Cast:'',
          milkcap:'',
        }
      });
    
      const onSubmit = async (data) => {
        console.warn('dgdgdg');
        console.warn(data);
        const db = getDatabase();
        await set(ref(db, 'animals/' + userId), data);
        Alert.alert('Success', 'Information has been saved');
       
      };
      const onError = value => {
        console.warn(value);
       
      };

      

        const styles = StyleSheet.create({
            input: {
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
              },
            text1: [
              
                    //LOGIN
                {fontSize:36,
                fontWeight:'400',
                borderRadius:10,
                }
                ,
                applyMedia(xsp, { //iphone 12 mini // i phone 13 pro max
                    fontSize: normalize(36)
                }),
                applyMedia(smp, { // i pad mini 6 th gen
                    fontSize: normalize(40),
                }),
                applyMedia(mdp, {   //i pad pro 9.7 ich
                    fontSize: normalize(42),
                }),
                applyMedia(xlp, { //i pad pro 12.9 inch
                    fontSize: normalize(50),  
                }),
                applyMedia(xxlp, {             
                }),
                applyMedia(xsl, {
                    backgroundColor:'green'    
                }),
                applyMedia(sml, { //i phone 8 ,i phone se 
                 
                }),
                applyMedia(mdl, { // i phone 13 pro max ,12 mini,13 mini, 11
                    fontSize: normalize(42),
                }),
                applyMedia(xll, { // i  pad mini 6 th generation  //i pad pro 9.7 inch
                    fontSize: normalize(44),
                }),
                applyMedia(xxll, { // i pad pro 12.9  
                    fontSize: normalize(50),      
                }),
               
            ],
            text2: [// LOGIN WITH UR PHONE NUMBER
            {
            fontSize:18,
            fontWeight:'400',
            }
            ,
            applyMedia(xsp, { //iphone 12 mini // i phone 13 pro max
                fontSize:18,
            }),
            applyMedia(smp, { // i pad mini 6 th gen
                fontSize: normalize(23),
            }),
            applyMedia(mdp, {   //i pad pro 9.7 ich
                fontSize: normalize(22),
            }),
            applyMedia(xlp, { //i pad pro 12.9 inch
                fontSize: normalize(30),  
            }),
            applyMedia(xxlp, {             
            }),
            applyMedia(xsl, {
                backgroundColor:'green'    
            }),
            applyMedia(sml, { //i phone 8 ,i phone se 
                backgroundColor:'green' 
            }),
            applyMedia(mdl, { // i phone 13 pro max ,12 mini,13 mini, 11
                fontSize: normalize(22),
            }),
            applyMedia(xll, { // i  pad mini 6 th generation  //i pad pro 9.7 inch
                fontSize: normalize(26),
            }),
            applyMedia(xxll, { // i pad pro 12.9     
                fontSize: normalize(32),    
            }),
           
        ],
        text3:[ 
            {
                fontSize:16,
                fontWeight:'700'},
           
            applyMedia(xsp, { //iphone 12 mini // i phone 13 pro max
                fontSize:16,
            }),
            applyMedia(smp, { // i pad mini 6 th gen
                fontSize: normalize(23),
            }),
            applyMedia(mdp, {   //i pad pro 9.7 ich
                fontSize: normalize(22)
            }),
            applyMedia(xlp, { //i pad pro 12.9 inch
                fontSize: normalize(25),  
            }),
            applyMedia(xxlp, {             
            }),
            applyMedia(xsl, {
                backgroundColor:'green'    
            }),
            applyMedia(sml, { //i phone 8 ,i phone se 
             
            }),
            applyMedia(mdl, { // i phone 13 pro max ,12 mini,13 mini, 11
                fontSize: normalize(18),
            }),
            applyMedia(xll, { // i  pad mini 6 th generation  //i pad pro 9.7 inch
                fontSize: normalize(22),
            }),
            applyMedia(xxll, { // i pad pro 12.9   
                fontSize: normalize(26),        
            }),
        ],
        text4:[ 
            {paddingLeft:10,fontSize:16,fontWeight:'700',color:'#3422F2'},
           
            applyMedia(xsp, { //iphone 12 mini // i phone 13 pro max
                fontSize:16,
            }),
            applyMedia(smp, { // i pad mini 6 th gen
                fontSize: normalize(23),
            }),
            applyMedia(mdp, {   //i pad pro 9.7 ich
                fontSize: normalize(22)
            }),
            applyMedia(xlp, { //i pad pro 12.9 inch
                fontSize: normalize(25),
            }),
            applyMedia(xxlp, {             
            }),
            applyMedia(xsl, {
                backgroundColor:'green'    
            }),
            applyMedia(sml, { //i phone 8 ,i phone se 
             
            }),
            applyMedia(mdl, { // i phone 13 pro max ,12 mini,13 mini, 11
                fontSize: normalize(18),
            }),
            applyMedia(xll, { // i  pad mini 6 th generation  //i pad pro 9.7 inch
                fontSize: normalize(22),
            }),
            applyMedia(xxll, { // i pad pro 12.9    
                fontSize: normalize(26),      
            }),
        ],
        height:[ 
            {width:'100%',borderRadius:30,height:55,borderColor:"lightgrey"},
           
            applyMedia(xsp, { //iphone 12 mini // i phone 13 pro max
                fontSize:16,
            }),
            applyMedia(smp, { // i pad mini 6 th gen
                fontSize: normalize(23),
            }),
            applyMedia(mdp, {   //i pad pro 9.7 ich
               height:60
            }),
            applyMedia(xlp, { //i pad pro 12.9 inch
                height:80,
                borderRadius:40,
            }),
            applyMedia(xxlp, {             
            }),
            applyMedia(xsl, {
                backgroundColor:'green'    
            }),
            applyMedia(sml, { //i phone 8 ,i phone se 
             
            }),
            applyMedia(mdl, { // i phone 13 pro max ,12 mini,13 mini, 11
                height:55,
            }),
            applyMedia(xll, { // i  pad mini 6 th generation  //i pad pro 9.7 inch
               height:60
            }),
            applyMedia(xxll, { // i pad pro 12.9    
                height:80,
                borderRadius:40,  
            }),
        ],
        })
return(
    <ScrollView style={{flex:1,}}>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
        <Text style={[
            GlobalStyle.font20
            ,{}]}>
    Add Your Cow Profile Here
        </Text>
    </View>
        <View style={{justifyContent:'center',alignItems:"center",marginTop:20}}>
         
        <View style={[,
        GlobalStyle.alignCenter,
        GlobalStyle.font18,
            {backgroundColor:'white',height:250,width:250,borderRadius:150,position:'relative'}]}>
                        {
                            image ? 
                            <Image
                            style={{height:250,width:250,borderRadius:150}}
                            source={{ uri: image }}
                          />
          : <Image
          style={{height:250,width:250,borderRadius:150}}
          source={require('../../assets/c1.jpg')}
        />
                              
                        }
        
            </View>
   
            <TouchableOpacity onPress={pickImage}>
            <View style={[
                GlobalStyle.alignCenter
                ,{position:'absolute',bottom:-20,backgroundColor:'lightgrey',height:40,width:40,borderRadius:80}]}>
            <AntDesign name="plus" size={24} color="black" />
            </View>
             </TouchableOpacity>

         
        </View>
                       
    

        
   
    <View style={{}}>

  

    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20}}>

    <View style={{ justifyContent:'center',alignItems:'center',marginTop:10}}>
 
    <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Email
      
          iconleft={false}
          leftIconName={'email'}
          textStyle={{width:'90%',paddingLeft:10}}
          style={{width:'100%',borderRadius:30,height:55,borderColor:"lightgrey"}}
          iconStyle={{position: 'absolute', left:15,}}
          placeholder='Name'
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          
      />
        )}
        name="name"
      />
   {errors.name && <Text style={{color:'grey',paddingTop:6}}> { errors?.name?.message } </Text>}
  </View>
  <View style={{ marginTop:10,justifyContent:'center',alignItems:'center',zIndex:9999}}>
    <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
            <DropDownPicker
            style={{width:'100%',borderRadius:30,height:55,borderColor:"lightgrey"}}
            textStyle={{color:'grey'}}
            placeholder="Choose Gender"
                  open={open1}
                  value={value1}
                  items={items1}
                  setOpen={setOpen1}
                  setValue={setValue1}
                  setItems={setItems1}
                  onChange={onChange}
                  onBlur={onBlur}
                  
                />
        )}
        name="Gender"
      />
   {errors.Gender && <Text style={{color:'grey',paddingTop:6}}> { errors?.Gender?.message } </Text>}
  </View>
 
    <View style={{ justifyContent:'center',alignItems:'center',marginTop:10}}>
    <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Email
      
          iconleft={false}
          leftIconName={'email'}
          textStyle={{width:'90%',paddingLeft:10}}
          style={{width:'100%',borderRadius:30,height:55,borderColor:"lightgrey"}}
          iconStyle={{position: 'absolute', left:15,}}
          placeholder='Age'
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          
      />
        )}
        name="Age"
      />
   {errors.Age && <Text style={{color:'grey',paddingTop:5}}> { errors?.Age?.message } </Text>}
  </View>
    <View style={{ justifyContent:'center',alignItems:'center',marginTop:10}}>
    <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Email
      
          iconleft={false}
          leftIconName={'email'}
          textStyle={{width:'90%',paddingLeft:10}}
          style={{width:'100%',borderRadius:30,height:55,borderColor:"lightgrey"}}
          iconStyle={{position: 'absolute', left:15,}}
          placeholder='Animal Breed'
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          
      />
        )}
        name="Cast"
      />
   {errors.Cast && <Text style={{color:'grey',paddingTop:6}}> { errors?.Cast?.message } </Text>}
  </View>

  <View style={{ justifyContent:'center',alignItems:'center',marginTop:10,zIndex:999999}}>
    <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
            <DropDownPicker
            style={{width:'100%',borderRadius:30,height:55,borderColor:"lightgrey"}}
            textStyle={{color:'grey'}}
            placeholder="Milking Capacity"
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  onChange={onChange}
                  onBlur={onBlur}
                  
                />
        )}
        name="milkcap"
      />
   {errors.milkcap && <Text style={{color:'grey',paddingTop:6}}> { errors?.milkcap?.message } </Text>}
  </View>




  {loading &&  <View >
            <ActivityIndicator size="large"
            />
            </View>}
     <View style={{ justifyContent:'center',alignItems:'center', paddingTop:20}}>
         <View style={{ width: '100%', backgroundColor:'#3422F2',borderRadius:30,}}>
          
           
         <Button
                iconRight={false}
                rightIconName={'bookmark'}
                iconleft={false}
                leftIconName={'bookmark'}
                title={ loading ? 'Please Wait' : 'Register' }
             onPress={handleSubmit(onSubmit,onError)} 
                style={{
                  justifyContent: 'space-between',backgroundColor:' #3422F2'
                }}
                textStyle={{width:'100%',fontSize:25,fontWeight:'700'}}
                iconStyle={{position: 'absolute', left:15,}}
            />
            </View>
            </View>

            </View>


            </View>
            <View style={{}}>

           
          
            </View>
            
                </ScrollView>
    
)
}



export default Profile;