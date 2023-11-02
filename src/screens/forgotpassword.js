import React ,{useState}from "react";
import { View,Text,StyleSheet,TouchableOpacity,Image,Alert,ActivityIndicator} from "react-native";
import { LeftIcon,H1, Email,Password,Button,CircularButton} from "../libs/layout/index";
import { useForm, Controller } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useDefaultQuery, useMediaQuery, applyMedia} from '../libs/layout/quries/useGridQuries';
import normalize from '../libs/layout/normalize/normalized';
import { getAuth,sendPasswordResetEmail } from "firebase/auth";
import { Entypo } from '@expo/vector-icons';

let schema = yup.object().shape({
  
    email: yup.string().required("Kindly Enter Your Email").email(),
   });
 // height: MediaQueryLogic([42,45,48,52,55]),
//console.warn(normalize(16));
const ForgotPassword=props=>{
    const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();
    const [loading, setLoading] = useState(false); // activity indicator
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
          defaultValues: {
            email: '',
          }
        });
        const onSubmit = data => {
            console.log(data)
             if (data.email.includes('@')) {
                setLoading(true);
                     const auth=getAuth();
                     sendPasswordResetEmail (auth,data.email).
                     then(res=>{
                        setLoading(false);
                         Alert.alert('Success', ' Your Email has been send Succesfuly');
                         props.navigation.navigate('LogIn');
                     }, err => {
                        setLoading(false);
                         Alert.alert(err?.code, 'Something went wrong');
                         console.log(err);
                     })
         
                 
             } else {
                 Alert.alert('Invalid email', 'Please enter a valid email address');
             }
            
            
           };
     
        const styles = StyleSheet.create({
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
    <View style={{flex:1,justifyContent:'space-around'}}>
        
         <View style={{justifyContent:'center',alignItems:'center'}}>
         <View style={{backgroundColor:'red'}}>
        <Image
        style={{height:100,width:220}}
    source={require('../../assets/d1.png')}

        
        />
 </View>
    </View>
    <View style={{}}>
    <View style={{justifyContent:'center',alignItems:'center',}}>
        <Text style={styles.text1}>
            Forgot Password
        </Text>
    </View>
    <View style={{marginTop:10,justifyContent:'center',alignItems:'center'}}>
            <Text style={styles.text2}>
           Enter ur email to reset ur password
    </Text>
    </View>

    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20}}>
    <View style={{ justifyContent:'center',alignItems:'center'}}>
    <Controller
    control={control}
    rules={{
     required: true,
    }}
     
    render={({ field: { onChange, onBlur, value } }) => (
    <Email
      
        iconleft={false}
        leftIconName={'email'}
        textStyle={{width:'90%',paddingLeft:10}}
        style={styles.height}
        iconStyle={{position: 'absolute', left:15,}}
        placeholder='Enter your Email'
        onChange={onChange}
        value={value}
    />
    )}
    name="email"
  />
  {errors.email && <Text style={{paddingTop:10}}>{errors?.email?.message}</Text>}
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
                title="Send code"
                onPress={handleSubmit(onSubmit)} 
                style={{
                  justifyContent: 'space-between',backgroundColor:' #3422F2'
                }}
                textStyle={{width:'100%',fontSize:18,paddingTop:6}}
                iconStyle={{position: 'absolute', left:15,}}
            />
            </View>
            </View>

            </View>


            </View>
            <View style={{}}>

           
            <View style={{flexDirection:'row',justifyContent:'center'}}>
          
            <View style={{flexDirection:'row'}}>
                <Text style={styles.text3}>
                    Back to 
                 
                </Text>
                <Entypo name="arrow-long-right" style={{paddingLeft:4}} size={24} color="black" />
                <TouchableOpacity onPress={()=>{props.navigation.navigate('LogIn')}}>
                <Text style={styles.text4}>
                   LogIn
                </Text>
                </TouchableOpacity>
               
            </View>
            </View>
            </View>
                </View>
           
    
)
}



export default ForgotPassword;