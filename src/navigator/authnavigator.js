import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native"
import LogIn from "../screens/LogIn";
import SignUp from "../screens/SignUp";
import ForgotPassword from "../screens/forgotpassword";
import MainPage from "../screens/MainPage";
import Chat from "../screens/chat";

import Demo from "../screens/Demo";

//-------------------------------------------
import { Entypo } from '@expo/vector-icons';

const stack=createNativeStackNavigator();


const AuthNavigator=props=>{
    const navigation = useNavigation();
    return(

        <stack.Navigator initialRouteName="LogIn">

<stack.Screen name="Demo" component={Demo} options={{
                headerShown:false,
            }}/>
            
             <stack.Screen name="LogIn" component={LogIn} options={{
                headerShown:false,
            }}/>
             <stack.Screen name="SignUp" component={SignUp} options={{
                headerShown:false,
            }}/>
              <stack.Screen name="ForgotPassword" component={ForgotPassword} options={{
                headerShown:false,
            }}/>

            
           
        
            
        </stack.Navigator>
    )
}
export default AuthNavigator;