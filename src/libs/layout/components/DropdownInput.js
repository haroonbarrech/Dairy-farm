import React, { useRef, useState } from 'react';
import {FlatList,StyleSheet,Text,TouchableOpacity,Modal,View} from 'react-native';

import {useDefaultQuery, useMediaQuery, applyMedia} from '../../layout/quries/useGridQuries';
import normalize from '../normalize/normalized';


import {Entypo } from '@expo/vector-icons';
{/* usage of dropdown width dummy data

const dropdown = [
  {
      label: "TOYOTA",
     
  },
  {
    label: "HONDA",
  },
  {
    label: "SUZUKI",

  },
  {
    label: "FERRARI",
  },
  {
    label: "LEXUS",
  },
  {
    label: "BENTLEY",
  },
  {
    label: "BMW",
  },
  {
    label: "MERCEDES",
  },
  {
    label: "TESLA",
  },
];


<Dropdown 
  label={"DropDown"}
  data={dropdown}
  onSelect={(x)=>{console.warn(x)}}
/>
*/}




export const Dropdown = ({ label, data, onSelect }) => {

  const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [popup, setPopup] = React.useState(false);
  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };
  const styles = StyleSheet.create({
    button: [
      {
      flexDirection: 'row',
      alignItems: 'center', 
      //backgroundColor:'pink',
      height: 50,
      zIndex: 1,
      width: '100%', 
      borderWidth: 1,
      borderTopRightRadius:18,
      borderTopLeftRadius:18,
      borderColor: '#424242',
      alignItems: 'center',
      justifyContent: 'center', 
      position: 'relative',
      paddingHorizontal: 0,
      marginBottom: 15,
    },
  applyMedia(xsp, {
      fontSize: normalize(19)
  }),
  applyMedia(smp, {
      fontSize: normalize(22)
  }),
  applyMedia(mdp, {
      fontSize: normalize(28)
  }),
  applyMedia(xlp, {
      fontSize: normalize(32)
  }),
  applyMedia(xxlp, {
      fontSize: normalize(36)
  }),
  applyMedia(xsl, {
      fontSize: normalize(17)
  }),
  applyMedia(sml, {
      fontSize: normalize(20)
  }),
  applyMedia(mdl, {
      fontSize: normalize(20)
  }),
  applyMedia(xll, {
      fontSize: normalize(23)
  }),
  applyMedia(xxll, {
      fontSize: normalize(26)
  }),
  ],
    buttonText: { 
      width: '100%',
      paddingLeft:15,
      
      color: '#424242',
    },
    icon: [
      {
     fontSize:28,
     color:'grey'
    },
  applyMedia(xsp, {
      fontSize: normalize(19)
  }),
  applyMedia(smp, {
      fontSize: normalize(22)
  }),
  applyMedia(mdp, {
      fontSize: normalize(28)
  }),
  applyMedia(xlp, {
      fontSize: normalize(32)
  }),
  applyMedia(xxlp, {
      fontSize: normalize(36)
  }),
  applyMedia(xsl, {
      fontSize: normalize(17)
  }),
  applyMedia(sml, {
      fontSize: normalize(20)
  }),
  applyMedia(mdl, {
      fontSize: normalize(20)
  }),
  applyMedia(xll, {
      fontSize: normalize(23)
  }),
  applyMedia(xxll, {
      fontSize: normalize(26)
  }),
  ],
    iconDiv:[{
      height: '100%', 
      position: 'absolute',
      width: 40,
      alignItems: 'center',
      justifyContent: 'center',
      right: 0,
      borderLeftWidth: 0,
      borderColor: '#424242',
    }],
    modelList:[{ 
      padding: 0,   
      flex: 1,
      position: 'absolute',
      width: '100%',   
      top: '100%', 
      zIndex: 999999,
      marginRight: 0,
      marginTop:1,
      backgroundColor: 'green'
    }],
    dropdown: {
      position: 'absolute',
      backgroundColor: 'white', 
      shadowColor: '#000000',
      zIndex:999999,
      shadowRadius: 4,
      shadowOffset: { height: 4, width: 0 },
      shadowOpacity: 0.5,
      width: '100%',  
      borderBottomLeftRadius:18,
      borderBottomRightRadius:18,
    },
    overlay: {  
      height: 50, 
    },
    item: {
      paddingHorizontal: 15,
      paddingVertical: 11,
      borderBottomWidth: 1, 
    },
    lastItem: {
      paddingHorizontal: 15,
      paddingVertical: 11,
    },
  });
  

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = (item) => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
    setPopup(!popup);
  };

  const renderItem = ({ item, index }) => {
    const isEnd = index === data.length - 1;
    if(isEnd){
    return(
      <TouchableOpacity style={styles.lastItem} onPress={() => onItemPress(item)}>
        <Text>{item.label}</Text>
    </TouchableOpacity>
    );
    } else {
      return(
        <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
          <Text>{item.label}</Text>
      </TouchableOpacity>
      );

    }

  };

  



  const renderDropdown = () => {
    return (
      <View  transparent animationType="none" style={[{display: popup? 'flex': 'none'}, styles.modelList]}>
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
          
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={() => {
        setPopup(!popup);
      }}
    >
      {renderDropdown()}
      <Text style={styles.buttonText}>
        {(!!selected && selected.label) || label}
      </Text>
      <View style={styles.iconDiv}>
      <Entypo style={styles.icon} name= {popup? "chevron-small-up":"chevron-small-down"} size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};






