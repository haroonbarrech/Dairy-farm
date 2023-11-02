import * as React from "react";
import GestureHandlerRootView from 'react-native-gesture-handler';
import { View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import {Carousel as Slider}from "react-native-reanimated-carousel";





export const Carousel = props  => {
  const progressValue = useSharedValue(0);
  const baseOptions =  ({
      vertical: false,
      width: 428,
      height: 375 * 0.6,
    } );


    const datatwo = [
      1,
      2,
      3
    ];

  return (
    <GestureHandlerRootView
      style={{
        alignItems: "center",
      }}
    >
      <Slider
        {...baseOptions}
        style={[
          {
           width: '100%',
           
        },
        props.style,
        ]}
        loop
        pagingEnabled={true}
        snapEnabled={true}
        autoPlay={false}
        autoPlayInterval={1500}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        data={datatwo}
        renderItem={({ item }) => {
         // return props.onRenderItem(item);
         return(
            <View style={{ }}>
              <Text>Slider</Text>
            </View>
     
          );
        }}
      />

   
    </GestureHandlerRootView>
  );
}



