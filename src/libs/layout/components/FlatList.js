import React from 'react';
import {SafeAreaView,FlatList,StyleSheet,StatusBar,} from 'react-native';
{/*
           <FlatListView
              data={DATA}
              onRenderItem={(item) => {
          return(
            <View style={{backgroundColor:'pink',width:'100%',height:60,flexDirection:'row'}}>

            <View style={{width:'30%',height:50,borderRadius:8,alignItems:'center',justifyContent:'center'}}>
          
            <Image 
                source={item.img}
                style={{width:"100%",height:60}}

              />
             
            </View>
            <View style={{backgroundColor:item.color,width:'70%',height:50,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:22,fontWeight:'bold'}}>
               {item.title}
              </Text>
            </View>
            </View>
            
            
     
          );
        }}

            />
      */}



export const FlatListView = props => {
  return (
 
      <FlatList
        data={props.data}
        renderItem={({item}) => {return props.onRenderItem(item);}}
        keyExtractor={item => item.id}
      />
                 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
