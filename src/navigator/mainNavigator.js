import React from 'react';
import { useSelector } from 'react-redux';
import DrawerNavigator from './drawernavigator';
import AuthNavigator from './authnavigator';


const MainNavigator = props => {
    
    const data = useSelector((state) => state.loginTab.user);
console.warn(data)

let checkLogin = data.length

    return checkLogin > 0 ? <DrawerNavigator /> : <AuthNavigator/>
    

}
export default MainNavigator;