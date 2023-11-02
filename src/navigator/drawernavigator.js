import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainPage from '../screens/MainPage';
import CustomDrawer from '../components/CustomDrawer';
import Profile from '../screens/Profile';
import Ledger from '../screens/Ledger';
import Contact from '../screens/ContactUs';
import AboutUs from '../screens/AboutUs';
import Setting from '../screens/Setting';
import Designerpage from '../screens/designerpage';

//----------------------------------------------------------------------
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function LogOutScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
  
      <Drawer.Navigator 
       drawerContent={props=><CustomDrawer{...props}/> }
       screenOptions={{
        headerShown:true,
        drawerActiveBackgroundColor:'#aa18ea',
        drawerActiveTintColor:'#333',
       drawerLabelStyle:{
          marginLeft:0,
          fontSize:15,
        },
       }}
       >
        <Drawer.Screen name="mainpageScreen" component={MainPage}
         options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
             <Ionicons
                name="md-home"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
        />
             <Drawer.Screen name="DesignerPage" component={Designerpage}
         options={{
          title: 'DESIGNER',
          drawerIcon: ({focused, size}) => (
             <Ionicons
                name="md-home"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
        />
        <Drawer.Screen name="Profile" component={Profile} 
                options={{
                  title: 'Profile',
                  drawerIcon: ({focused, size}) => (
                    <AntDesign
                    name="profile"
                        size={size}
                        color={focused ? '#7cc' : '#ccc'}
                     />
                  ),
               }}
     
        />
        <Drawer.Screen name="Ledger" component={Ledger} 
        options={{
          title: 'Ledger',
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons 
            name="account-cash-outline" 
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
        />
  
    
        <Drawer.Screen name="Contact Us" component={Contact}  
        options={{
          title: 'Contact Us',
          drawerIcon: ({focused, size}) => (
            <MaterialIcons
            name="phone"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
        />
     
        <Drawer.Screen name="About Us" component={AboutUs}
            options={{
              title: 'About Us',
              drawerIcon: ({focused, size}) => (
                <Foundation
                name="clipboard-notes"
                    size={size}
                    color={focused ? '#7cc' : '#ccc'}
                 />
              ),
           }}
        />
            <Drawer.Screen name="Setting" component={Setting}
             options={{
              title: 'Settings',
              drawerIcon: ({focused, size}) => (
                <AntDesign
                name="setting"
                    size={size}
                    color={focused ? '#7cc' : '#ccc'}
                 />
              ),
           }}
        />
      

      </Drawer.Navigator>
 
  );
}