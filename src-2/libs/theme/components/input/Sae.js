import React from 'react';
import PropTypes from 'prop-types';
import { normalize } from '../../normalize/normalized';
import { fs } from '../../constants/fontHelper';
import { applyMedia } from '../../quries/useMediaQuries';
import {
  Animated,
  TextInput,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from 'react-native';

import BaseInput from './BaseInput';

export default class Sae extends BaseInput {
  static propTypes = {
    height: PropTypes.number,
    /*
     * active border height
     */
    borderHeight: PropTypes.number,
    /*
     * This is the icon component you are importing from react-native-vector-icons.
     * import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
     * iconClass={FontAwesomeIcon}
     */
    iconClass: PropTypes.func.isRequired,
    /*
     * Passed to react-native-vector-icons library as name prop
     */
    iconName: PropTypes.string,
    /*
     * Passed to react-native-vector-icons library as color prop.
     * This is also used as border color.
     */
    iconColor: PropTypes.string,
    inputPadding: PropTypes.number,
    labelHeight: PropTypes.number,
  };

  static defaultProps = {
    iconColor: 'white',
    height: 48,
    inputPadding: 16,
    labelHeight: 24,
    borderHeight: 2,
    animationDuration: 300,
    iconName: 'pencil',
  };

  render() {
    const {
      iconClass,
      iconColor,
      iconName,
      label,
      style: containerStyle,
      height: inputHeight,
      inputPadding,
      labelHeight,
      borderHeight,
      inputStyle,
      labelStyle,
    } = this.props;
    const { width, focusedAnim, value } = this.state;
    const AnimatedIcon = Animated.createAnimatedComponent(iconClass);

    return (
      <View
        style={[
          styles.container,
          containerStyle,
          {
            height: inputHeight + inputPadding,
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',  
            padding: 10,
            position: 'relative',
          },
          styles.fieldOuter

        ]}
        onLayout={this._onLayout}
      >
        <TouchableWithoutFeedback onPress={this.focus} >
          <Animated.View
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              paddingHorizontal: 5,
              marginLeft: 10, 
              bottom: focusedAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [38/2, 38 + inputPadding],
              }), 
            }}
          >

           {/*
           Label is going here 
          */}
            <Animated.Text
              style={[
                styles.label,
                labelStyle,
                {
                  fontSize: focusedAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [fs(16), fs(12)],
                  }),
                },
                 

                
              ]}
            >
              {label}
            </Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
        <TextInput
          ref={this.input}
          {...this.props}
          style={[
            styles.textInput,
            inputStyle,
            {
              width,
              height: inputHeight,
              paddingTop: 0, 
              top: 7,
              
            },
          ]}
          value={value}
          onBlur={this._onBlur}
          onChange={this._onChange}
          onFocus={this._onFocus}
          underlineColorAndroid={'transparent'}
        />
        <TouchableWithoutFeedback onPress={this.focus}>
          <AnimatedIcon
            name={iconName}
            color={iconColor}
            style={{
              position: 'absolute',  
              top: 22,
              right: 15,
              fontSize: 20,
              zIndex: 999, 
            }}
          />
        </TouchableWithoutFeedback>
        {/* bottom border */}
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
   fieldOuter: { 
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff', 
    marginBottom: 35,
   },
  label: {
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    color: '#101010',  
    fontSize: 12,
  },
  textInput: {
    position: 'absolute',
    top: 3,
    left: 0,
    paddingHorizontal: 15, 
    fontSize: 18,
    color: '#101010', 

  },
});



{
/*
usage

<View style={[styles.card2,]}>
        <Text style={styles.title}>Sae</Text>
        <Sae
          label={"Email Address"}
          iconClass={FontAwesome}
          iconName={"pencil"}
          iconColor={"red"}
        />
        <Sae
          style={styles.input}
          label={"Invitation Code"}
          iconClass={FontAwesome}
        />
      </View>

*/

}