import React ,{useState}from "react";
import { View,Text,SafeAreaView, TextInput, Image} from "react-native";
import { LeftIcon,H1, Email,Password,Button,CircularButton,T1} from "../libs/layout/index";
import {useDefaultQuery, useMediaQuery, applyMedia} from '../libs/layout/quries/useGridQuries';
import { LinearGradient } from 'expo-linear-gradient';
import { GlobalStyles } from "../libs/layout/constants/Styles";



const Demo =props=>{
    const GlobalStyle=GlobalStyles();
    const {loader,setloader}=useState(false)
   
    return(
        <LinearGradient
    
        // Button Linear Gradient
        colors={['#8360c3','#2ebf91']}
        style={{height:150,flex:1}}>     
        <SafeAreaView style={{}}>

        
        <View style={[GlobalStyle.display]}>  
        <LinearGradient
    
        // Button Linear Gradient
        colors={['#fffbd5','#b20a2c']}
        style={{height:150,backgroundColor:'pink',justifyContent:'center',alignItems:'center'}}>
        <Text style={[
          GlobalStyle.textUppercase,
          GlobalStyle.font30,
          GlobalStyle.fw5,
          GlobalStyle.textUnderline
          ]}>Demo Page</Text>
      </LinearGradient>

        </View>
      
        <View style={{height:200,justifyContent:'center',alignItems:'center',backgroundColor:'lightgrey',marginTop:0}}>
   

       
       
            <Text style={[
              GlobalStyle.font30,
              GlobalStyle.fwb,
              GlobalStyle.textStrike
              ]}> 
            Heading 1
            </Text>
            <Text style={[
              GlobalStyle.font28,
              GlobalStyle.fw6,
              ]}> 
           Heading 2
     
            </Text>
            <Text style={[
                GlobalStyle.font24,
                GlobalStyle.fw5,  
                GlobalStyle.textUnderline
                ]}>
                Heading 3
                  </Text>
       
       
       
        </View>
        <View style={[
          GlobalStyle.marginTop12
          ]}>
          <Image
          style={[
            GlobalStyle.width100,
            GlobalStyle.height66,

          ]}
          source={require('../../assets/logoo.png')}
          
          />
        </View>
     {/*
        <View style={{ width: '100%', backgroundColor:'#3422F2',borderRadius:30,marginTop:100}}>
          
           
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
                */}
        </SafeAreaView>
        </LinearGradient>
    )
}
export default Demo;