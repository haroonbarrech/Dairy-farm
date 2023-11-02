import React, {useState, useEffect} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Image,Alert,ActivityIndicator} from "react-native";
import { H6, Email,Password,Button} from "../libs/layout/index";
import { useForm, Controller } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useDefaultQuery, useMediaQuery, applyMedia} from '../libs/layout/quries/useGridQuries';
import normalize from '../libs/layout/normalize/normalized';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getData } from '../constant/store';
import { storeData } from '../constant/store';
import { GlobalStyles } from '../libs/layout/constants/Styles';
import {useDispatch} from 'react-redux';
import * as loginAction from '../store/actions/loginActions'; 



let schema = yup.object().shape({
    email: yup.string().required("Kindly Enter Your Email").email(),
   pass: yup.string().required("Kindly Enter Your Password").min(5).max(11),
});

let obj, xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll;
const LogIn=props=>{
    const dispatch = useDispatch();

    const GlobalStyle = GlobalStyles();
    obj = { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();
    const styles = StyleSheet.create({
        height:[ 
           {width:'100%',borderRadius:30,height:55,borderColor:"lightgrey",paddingLeft:10},
          
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
    
  
     const [loading, setLoading] = useState(false); // activity indicator
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
          defaultValues: {
            email: '',
            pass: '',
         
          }
        });

       

 
           useEffect(async () => {
           const isLoggedIn = await getData();
           //console.warn(isLoggedIn.user.uid)
           if (isLoggedIn.user.uid) {dispatch(loginAction.logiin(isLoggedIn.user.uid)) }
       }, []);
 


        const onSubmit = data => {
           
            if (data.email.includes('@')) {
                setLoading(true);
                    const auth=getAuth();
                    signInWithEmailAndPassword (auth,data.email,data.pass).
                    then(res=>{
                        setLoading(false);
                        storeData(res?.user?.uid);
                        
                        storeData(res)
                        dispatch(loginAction.logiin(res?.user?.uid)) 

                       
                        Alert.alert('Success', ' Successfully Log In');
                    }, err => {
                        setLoading(false);
                        Alert.alert(err?.code, 'Something went wrong');
                        console.log(err);
                    })
        
                
            } else {
                Alert.alert('Invalid email', 'Please enter a valid email address');
            }
           
           
          };
    
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
        <Text style={GlobalStyle.font30}>
            Login
        </Text>
    </View>
    <View style={{marginTop:10,justifyContent:'center',alignItems:'center'}}>
            <Text style={GlobalStyle.font14}>
           Login with your phone number
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
        keyboardType="numeric"
        onChange={onChange}
        value={value}
     
     
    />
    )}
    name="email"
  />
  {errors.email&& <Text style={{paddingTop:3,color:"grey"}}>{errors?.email?.message}</Text>}
  </View>
    <View style={{ justifyContent:'center',alignItems:'center',paddingTop:10,width:"100%"}}>
    <Controller
    control={control}
   
    render={({ field: { onChange, onBlur, value } }) => (      
    <Password 
    icon="eye"
    iconReplace="eye-with-line" 
    style={styles.height}
        placeholder='Enter your Password'
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        maxLength={11}
        eyestyle={{}}
    />
    )}
    name="pass"
  />
  {errors.pass && <Text style={{paddingTop:3,color:"grey"}}>{errors?.pass?.message}</Text>}
  </View>
  <View style={{paddingRight:20,paddingTop:6,alignItems:'flex-end',width:'100%'}}>
    <TouchableOpacity onPress={()=>props.navigation.navigate('ForgotPassword')}>
    <H6>
        Forgot Password?
    </H6>

    </TouchableOpacity>
   
  </View>


  {loading &&  <View style={{marginTop:30}}>
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
                title={ loading ? 'Please Wait' : 'Log In' }
               onPress={handleSubmit(onSubmit)}
                style={{
                  justifyContent: 'space-between',backgroundColor:' #3422F2'
                }}
                textStyle={[GlobalStyle.font7,{width:'100%', paddingTop:6}]}
                iconStyle={{position: 'absolute', left:15,}}
            />
            </View>
            </View>

            </View>


            </View>
           
           
 
            <View style={{}}>

           
            <View style={{flexDirection:'row',justifyContent:'center'}}>
            <View style={{flexDirection:'row'}}>
            <Text style={[
            GlobalStyle.font14,
            GlobalStyle.fw6
            ,{}]}>
  Don't Have an account?
        </Text>
       
                <TouchableOpacity onPress={()=>{props.navigation.navigate('SignUp')}}>
                <Text style={[
            GlobalStyle.font14,
            GlobalStyle.fw6
            ,{color:'#3422F2',paddingLeft:10}]}>
 Sign Up
        </Text>
        
                </TouchableOpacity>
               
            </View>
            </View>
            </View>
                </View>
           
    
)
}



export default LogIn;