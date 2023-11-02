import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../../screens/HomeScreen';
import ButtonScreen from '../../screens/ButtonScreen';
import FormScreen from '../../screens/FormScreen';

const Drawer = createDrawerNavigator();

const AppNavigator = ()=>{
    return(
        <Drawer.Navigator initialRouteName='FormInputs'>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="ButtonsComponents" component={ButtonScreen} />
            <Drawer.Screen name="FormInputs" options={{title:'Form Input'}} component={FormScreen} />
        </Drawer.Navigator>
    )
}

export default AppNavigator;