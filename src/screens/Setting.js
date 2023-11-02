import React,{useState} from "react";
import { Text,View } from "react-native";
import { GlobalStyles} from "../libs/layout/constants/Styles";
import { ScrollView } from "react-native-gesture-handler";

import {Calendar, LocaleConfig} from 'react-native-calendars';



const Setting =props=>{
    const GlobalStyle=GlobalStyles();
    const [selected, setSelected] = useState('');
 
    return(
        <ScrollView style={{backgroundColor:'white'}}>
        <View style={[
            
            ,{padding:20,alignItems:'center'}]}>
            <Text style={[
                GlobalStyle.font30,


            ,{}]}>
           Setting
            </Text>
       

        </View>
        <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
    
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'},

      }}
    />
        </ScrollView>
    )
}
export default Setting;