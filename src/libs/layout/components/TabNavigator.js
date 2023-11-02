import React, { useState } from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { CurvedBottomBar } from 'react-native-utils-navigation-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/home';
import ClientsTab from '../screens/clientstab';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import SiteVisit from '../screens/sitevisit';

StatusBar.setBarStyle('dark-content');

const TabNavigator = props => {
    const [type, setType] = useState('down');

 

    const _renderIcon = (routeName, selectTab) => {
        let icon = '';

        switch (routeName) {
        case 'Home':
            icon = 'ios-home-outline';
            break;
        case 'title2':
            icon = 'apps-outline';
            break;
        case 'title3':
            icon = 'bar-chart-outline';
            break;
        case 'title4':
            icon = 'ios-settings-sharp';
            break;
        }

        return (
            <Ionicons name={icon} size={23} color={routeName === selectTab ? 'white' : 'white'} />
        );
    };

    return (
        <View style={styles.container}>
            <CurvedBottomBar.Navigator
                style={[type === 'down' && {backgroundColor: 'transparent'}]}
                type={type}
                height={60}
                circleWidth={55}
                bgColor="#1D9BF0"
                borderTopLeftRight={true}
                initialRouteName="Home"
                renderCircle={() => (
                    <TouchableOpacity
                    onPress={()=>{props.navigation.navigate('AddCustomer')}}
                        style={[styles.btnCircle,]}
                    >
                       <AntDesign name="adduser" size={38} color="white" />
                    </TouchableOpacity>
                )}
                tabBar={({ routeName, selectTab, navigation }) => {
                return (
                    <TouchableOpacity
                        onPress={() => navigation(routeName)}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                    >
                        {_renderIcon(routeName, selectTab)}
                    </TouchableOpacity>
                );
                }}>
                <CurvedBottomBar.Screen
                    name="Home"
                    position="left"
                    component={() => <Home />}
                />
                <CurvedBottomBar.Screen
                    name="title2"
                    component={() => <ClientsTab/>}
                    position="left"
                />
                <CurvedBottomBar.Screen
                    name="title3"
                    component={() => <SiteVisit/>}
                    position="right"
                />
                <CurvedBottomBar.Screen
                    name="title4"
                    component={() => <View style={{ backgroundColor: '#FFEBCD', flex: 1 }} />}
                    position="right"
                />
            </CurvedBottomBar.Navigator>
        </View>
    );
};

export default TabNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btnCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00C400',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
        bottom: 28
    },
    btnCircleUp: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00C400',
        bottom: 18,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
    },
    imgCircle: {
        width: 30,
        height: 30,
        tintColor: '#48CEF6'
    },
    img: {
        width: 30,
        height: 30,
    }