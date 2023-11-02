// React Native Date Picker – To Pick the Date using Native Calendar
// https://aboutreact.com/react-native-datepicker/

// import React in our2code
import React, { useState } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

//import DatePicker from the package we installed
import DatePicker from 'react-native-datepicker';



const Calendar = () => {
  const [date, setDate] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInner}>
        <Text style={styles.title}>
    Calendar
        </Text>
        <DatePicker
          style={styles.datePickerStyle}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="Select Date"
          format="DD-MM-YYYY"
          minDate="01-01-1960"
          maxDate="01-01-2050"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none', 
              //borderWidth:1,
            
            },
            dateInput: { // date input stylee
               
              backgroundColor:'pink',
              borderRadius:8,
              borderColor: 'red', 
              width: 480,

            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    //backgroundColor: 'red',
    flexDirection: 'row',
    marginTop: 30,
    padding: 10,
  }, 
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
 
  },
  datePickerStyle: {
    width: '100%', 
    marginTop: 20,
   // backgroundColor: 'yellow',
    padding: 10, 
    height: 50,
    //borderWidth: 2,
    display: 'flex',
    alignItems:'center',
    justifyContent:'space-around',

 

  },
});

export default Calendar;



