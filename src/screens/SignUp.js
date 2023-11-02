import React ,{useState}from "react";
import { View,Text,StyleSheet,TouchableOpacity,Image,Alert, ActivityIndicator} from "react-native";
import { LeftIcon,H1, Email,Password,Button,CircularButton} from "../libs/layout/index";
import { useForm, Controller } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useDefaultQuery, useMediaQuery, applyMedia} from '../libs/layout/quries/useGridQuries';
import normalize from '../libs/layout/normalize/normalized';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { GlobalStyles } from "../libs/layout/constants/Styles";
import { AntDesign } from '@expo/vector-icons';




let schema= yup.object().shape({
    name:yup.
    string()
    .required("Please Enter Your Name"),
    email:yup.
    string()
    .required("Please Enter Your Email").matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Email must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
    pass: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
    cpass:yup
    .string()
    .required("Please Re-enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
})
 // height: MediaQueryLogic([42,45,48,52,55]),
//console.warn(normalize(16));
const SignUp=props=>{
    const GlobalStyle=GlobalStyles();

    const [image, setImage] = useState(null);
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
    const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();
    const [loading, setLoading] = useState(false); // activity indicator
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
          name:'',
          email: '', 
          pass: '',
          cpass:'',
        }
      });
    
      const onSubmit = data => {
       console.warn(data);
        if (data.email.includes('@')) {
            if (data.pass === data.cpass) {
                setLoading(true);
                const auth=getAuth();
                createUserWithEmailAndPassword(auth,data.email,data.pass).
                then(res=>{
                    setLoading(false);
                    Alert.alert('Success', 'Your account has been created');
                    props.navigation.navigate('LogIn');
                }, err => {
                    Alert.alert(err?.code, 'Something went wrong');
                    console.log(err);
                    setLoading(false);
                })
    
            }
        } else {
            Alert.alert('Invalid email', 'Please enter a valid email address');
        }
       
       
      };

      

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
return(
    <View style={{flex:1,justifyContent:'space-around',height:100}}>
          <View style={{}}>
           <View style={{justifyContent:'center',alignItems:'center',marginBottom:30}}>
         <View style={{}}>
        <Text style={[
            GlobalStyle.font28,
            GlobalStyle.fw6
            ,{}]}>
    SignUp
        </Text>
    </View>
    </View>
    <View style={[,
        GlobalStyle.alignCenter,
        GlobalStyle.font18,{}]}>
           
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
          source={require('../../assets/p.jpeg')}
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
</View>
       
      
    <View style={{}}>
 
  

    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20}}>
    <View style={{ justifyContent:'center',alignItems:'center',marginBottom:10}}>
    <Controller
        control={control}
        rules={{
         maxLength: 30,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Email
      
          iconleft={false}
          leftIconName={'email'}
          textStyle={{width:'90%',paddingLeft:10}}
          style={styles.height}
          iconStyle={{position: 'absolute', left:15,}}
          placeholder='Enter your Name'
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          maxLength={10}
          
      />
        )}
        name="name"
      />
   {errors.name && <Text style={{color:'grey',paddingTop:5}}> { errors?.name?.message } </Text>}
  </View>
    <View style={{ justifyContent:'center',alignItems:'center',addingTop:10}}>
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
          style={styles.height}
          iconStyle={{position: 'absolute', left:15,}}
          placeholder='Enter your Email'
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          
      />
        )}
        name="email"
      />
   {errors.email && <Text style={{color:'grey'}}> { errors?.email?.message } </Text>}
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
        value={value}
        maxLength={11}
    />
    )}
    name="pass"
  />
 {errors.pass && <Text style={{color:'grey'}}> { errors?.pass?.message } </Text>}
  </View>
  <View style={{ justifyContent:'center',alignItems:'center',paddingTop:10,width:"100%"}}>
    <Controller
    control={control}
    render={({ field: { onChange, onBlur, value } }) => (      
    <Password 
    icon="eye"
    iconReplace="eye-with-line" 
    style={styles.height}
        placeholder='Re-Enter your Confirm'
        onChange={onChange}
        value={value}
        maxLength={1111}
    
    />
    )}
    name="cpass"
  />
  {errors.cpass && <Text style={{color:'grey'}}> { errors?.cpass?.message } </Text>}
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
                title={ loading ? 'Please Wait' : 'Sign In' }
               onPress={handleSubmit(onSubmit)} 
                style={{
                  justifyContent: 'space-between',backgroundColor:' #3422F2'
                }}
                textStyle={{width:'100%',fontSize:18,paddingTop:6}}
                iconStyle={{position: 'absolute', left:15,}}
            />
            </View>
              
           
            <View style={{flexDirection:'row',marginTop:10}}>
            <Text style={[
            GlobalStyle.font14,
            GlobalStyle.fw6
            ,{}]}>
  Already Have an account.?
        </Text>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('Logn')}}>
                <Text style={[
            GlobalStyle.font14,
            GlobalStyle.fw6
            ,{color:'#3422F2',paddingLeft:5}]}>
 Sign In
        </Text>
                </TouchableOpacity>
               
            </View>
          
            </View>

            </View>


            </View>
            

         
        
                </View>
           
    
)
}



export default SignUp;