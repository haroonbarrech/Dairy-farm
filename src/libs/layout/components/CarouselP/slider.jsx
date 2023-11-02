import * as React from "react";
import GestureHandlerRootView from 'react-native-gesture-handler';
import { View, Dimensions } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
 {/*
     <View style={{width: '100%'}}>

     <Slider 
     style={{ backgroundColor: 'white',  }}
        data={data}
        onRenderItem={(item) => {
          return(
            <View style={{ width:'100%',height: '100%',borderRadius:12,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:30,fontWeight:'bold'}}>
                {item.id}
              </Text>
              <Image 
                source={item.img}
                style={{width:"100%",height:"100%"}}

              />
            </View>
     
          );
        }}
        />

    
     </View>
      
     */}





export const Slider = props  => {
  const progressValue = useSharedValue(0);
  const baseOptions =  ({
      vertical: false,
      width: 428,
      height: 375 * 0.6,
    } );

  return (
    <GestureHandlerRootView
      style={{
        alignItems: "center",
      }}
    >
      <Carousel
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
        data={props.data}
        renderItem={({ item }) => {
          return props.onRenderItem(item);
        }}
      />
      {!!progressValue && (
        <View // pagination style_____________
          style={ {
                flexDirection: "row",
                justifyContent: "space-between",
                width: 100,
                alignSelf: "center",
                paddingTop: 10,
              }
          }
        >
          {props.data.map((backgroundColor, index) => {
            return (
              <PaginationItem
                backgroundColor={'grey'}
                animValue={progressValue}
                index={index}
                key={index}
                isRotate={false}
                length={props.data.length}
              />
            );
          })}
        </View>
      )}
   
    </GestureHandlerRootView>
  );
}

const PaginationItem = (props) => {
  const { animValue, index, length, backgroundColor, isRotate } = props;
  const width = 10;
  

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);
  return (
    <View
      style={{
        backgroundColor: "lightgrey",
        width,
        height: width,
        borderRadius: 50,
        overflow: "hidden",
        transform: [
          {
            rotateZ: isRotate ? "90deg" : "0deg",
          },
        ],
      }}
    >
      <Animated.View
        style={[
          {
            borderRadius: 50,
            backgroundColor,
            flex: 1,
          },
          animStyle,
        ]}
      />
    </View>
  );
};


