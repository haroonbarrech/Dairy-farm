import * as React from 'react';
import { ScrollView, PixelRatio } from 'react-native';
import{ View, Text, StyleSheet, Image, ActivityIndicator, useWindowDimensions } from 'react-native';  
import { Row, Col, Button, H1, H2, H3, H4, H5, Surface, Box, useGrid, Carousel, Avatar, RoundButton, Divider } from '../libs/theme';


const HomeScreen = (props)=>{
  const {height, width} = useWindowDimensions();
const {defaultTheme} = useGrid();
const colors = defaultTheme.colors;
const data = [
  {
      id: 1,
      img:require('../../assets/person1.jpg'),
      color:"#899F9C"
  },
  {
      id: 2,
      img:require('../../assets/trees1.jpg'),
      color:"#899F9C"

  },
  {
      id: 3,
      img:require('../../assets/mart2.jpg'),
      color:"#899F9C"

  },
  {
      id: 4,
      img:require('../../assets/person1.jpg'),
      color:"#899F9C"

  },
  {
    id: 5,
    img:require('../../assets/trees1.jpg'),

},
{
  id: 6,
  img:require('../../assets/mart2.jpg'),

},
];

const datatwo = [
  1,
  2,
  3
];
    return(
   
  <ScrollView style={[styles.container, {backgroundColor: colors.body}]}>
   <Text>Open up App.js to start working on y + {width} + " " + {height} "pix Ratio" {PixelRatio.get()} + "" + {PixelRatio.getFontScale()}</Text>
   <Surface style={styles.surf} elevation={4} color ="black" padding={12} bgColor="pink" ph={30} pv={50} alignItems="center" mt={10} mb={0}>
     <Text>This is elevation</Text>
   </Surface> 

 
<Box 
 fDir={["row", "column", "column" ]}
 aItems={["flex-start", "flex-end", "center"]}
 jc={["flex-end", "center", "flex-start"]}
 >
<Box style={{backgroundColor: 'green'}} flex={1}>
<Text>1</Text>
</Box>
<Box style={{backgroundColor: 'pink', }} flex={[1, 2, 3]}>
<Text  >2</Text>
</Box>
<Box style={{backgroundColor: 'yellow'}} flex={1}>
<Text >3</Text>
</Box> 
</Box>
 
 

<Row mt={30}>
<Col sm={12}>
  <H4>Default Button</H4>
</Col>
<Button 
         btnTitle="Default"
         type="Text"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
 
         <Button 
         btnTitle="Custom"
         type="Text"
         btnOuterStyle={{
            borderColor: '#6e6e6e',
         }}   
         btnTextStyle={{ 
            color: '#6e6e6e',
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Disable"
         type="TextDisabled"
         disabled={true}
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Icon"
         type="Text"
         leftIconName="camera"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         iconStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Loading"
         type="Text"
         leftIconName="reload"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Icon right"
         type="Text"
         rightIconName="camera"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
</Row>



<Row mt={30}>
<Col sm={12}>
  <H4>Outlined Button</H4>
</Col>

<Button 
         btnTitle="Default"
         type="OutlinedRound"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Custom"
         type="OutlinedRound"
         btnOuterStyle={{
            borderColor: '#6e6e6e',
         }}   
         btnTextStyle={{ 
            color: '#6e6e6e',
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Disable"
         type="OutlinedRoundDisabled"
         disabled={true}
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Icon"
         type="OutlinedRound"
         leftIconName="camera"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         iconStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Loading"
         type="OutlinedRound"
         leftIconName="reload"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Icon right"
         type="OutlinedRound"
         rightIconName="camera"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
</Row>




<Row mt={30}>
<Col sm={12}>
  <H4>Contained Button</H4>
</Col>

<Button 
         btnTitle="Default"
         type="ContainedRound"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Custom"
         type="ContainedRound"
         btnOuterStyle={{
            backgroundColor: '#d4baff',
         }}   
         btnTextStyle={{ 
            color: '#fff',
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Disable"
         type="ContainedRoundDisabled"
         disabled={true}
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Icon"
         type="ContainedRound"
         leftIconName="camera"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         iconStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Loading"
         type="ContainedRound"
         leftIconName="reload"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Icon right"
         type="ContainedRound"
         rightIconName="camera"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
</Row>


<Row mt={30}>
<Col sm={12}>
  <H4>Shadow Button</H4>
</Col>

<Button 
         btnTitle="Default"
         type="ElevatedRound"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Custom"
         type="ElevatedRound"
         btnOuterStyle={{
            backgroundColor: '#d4baff',
         }}   
         btnTextStyle={{ 
            color: '#fff',
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Disable"
         type="ElevatedRoundDisabled"
         disabled={true}
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Icon"
         type="ElevatedRound"
         leftIconName="camera"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         iconStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Loading"
         type="ElevatedRound"
         leftIconName="reload"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Icon right"
         type="ElevatedRound"
         rightIconName="camera"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
</Row>


<Row mt={30}>
<Col sm={12}>
  <H4>Outlined Box Button</H4>
</Col>
 
<Button 
         btnTitle="Default"
         type="OutlinedBox"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Custom"
         type="OutlinedBox"
         btnOuterStyle={{
            borderColor: '#6e6e6e',
         }}   
         btnTextStyle={{ 
            color: '#6e6e6e',
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Disable"
         type="OutlinedBoxDisabled"
         disabled={true}
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Icon"
         type="OutlinedBox"
         leftIconName="camera"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         iconStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Loading"
         type="OutlinedBox"
         leftIconName="reload"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Icon right"
         type="OutlinedBox"
         rightIconName="camera"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
</Row>



<Row mt={30}>
<Col sm={12}>
  <H4>Contained Box Button</H4>
</Col>

<Button 
         btnTitle="Default"
         type="ContainedBox"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Custom"
         type="ContainedBox"
         btnOuterStyle={{
            backgroundColor: '#d4baff',
         }}   
         btnTextStyle={{ 
            color: '#fff',
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Disable"
         type="ContainedBoxDisabled"
         disabled={true}
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Icon"
         type="ContainedBox"
         leftIconName="camera"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         iconStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Loading"
         type="ContainedBox"
         leftIconName="reload"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Icon right"
         type="ContainedBox"
         rightIconName="camera"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
</Row>

<Row mt={30}>
  <Col sm={12}>
    <H4>Shadow Box Button</H4>
  </Col> 
  <Button 
         btnTitle="Default"
         type="ElevatedBox"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Custom"
         type="ElevatedBox"
         btnOuterStyle={{
            backgroundColor: '#d4baff',
         }}   
         btnTextStyle={{ 
            color: '#fff',
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Disable"
         type="ElevatedBoxDisabled"
         disabled={true}
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Icon"
         type="ElevatedBox"
         leftIconName="camera"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         iconStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Loading"
         type="ElevatedBox"
         leftIconName="reload"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Icon right"
         type="ElevatedBox"
         rightIconName="camera"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         /> 
</Row>


<Row mt={30}>
<Col sm={12}>
  <H4>Outlined Block Button</H4>
</Col>
 
<Button 
         btnTitle="Default"
         type="OutlinedBoxBlock"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Custom"
         type="OutlinedBoxBlock"
         btnOuterStyle={{
            borderColor: '#6e6e6e',
         }}   
         btnTextStyle={{ 
            color: '#6e6e6e',
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Disable"
         type="OutlinedBoxBlockDisabled"
         disabled={true}
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Icon"
         type="OutlinedBoxBlock"
         leftIconName="camera"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         iconStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Loading"
         type="OutlinedBoxBlock"
         leftIconName="reload"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Icon right"
         type="OutlinedBoxBlock"
         rightIconName="camera"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
</Row>



<Row mt={30}>
<Col sm={12}>
  <H4>Contained Block Button</H4>
</Col>

<Button 
         btnTitle="Default"
         type="ContainedBoxBlock"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Custom"
         type="ContainedBoxBlock"
         btnOuterStyle={{
            backgroundColor: '#d4baff',
         }}   
         btnTextStyle={{ 
            color: '#fff',
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Disable"
         type="ContainedBoxBlockDisabled"
         disabled={true}
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Icon"
         type="ContainedBoxBlock"
         leftIconName="camera"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         iconStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Loading"
         type="ContainedBoxBlock"
         leftIconName="reload"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Icon right"
         type="ContainedBoxBlock"
         rightIconName="camera"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
</Row>
 <Box>
    <H4>Shadow Block Button</H4> 
  <Button 
         btnTitle="Default"
         type="ElevatedBoxBlock"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Custom"
         type="ElevatedBoxBlock"
         btnOuterStyle={{
            backgroundColor: '#d4baff',
         }}   
         btnTextStyle={{ 
            color: '#fff',
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Disable"
         type="ElevatedBoxBlockDisabled"
         disabled={true}
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Icon"
         type="ElevatedBoxBlock"
         leftIconName="camera"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         iconStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Loading"
         type="ElevatedBoxBlock"
         leftIconName="reload"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         />
         <Button 
         btnTitle="Icon right"
         type="ElevatedBoxBlock"
         rightIconName="camera"
         btnOuterStyle={{
            
         }}   
         btnTextStyle={{ 
            
         }}
         onPress={() => {
           console.log('I am clicked');
         }}   
         /> 
   </Box>

<H1>Heading 1</H1>
<H2>Heading 2</H2>
<H3>Heading 3</H3>
<H4>Heading 4</H4>
<H5>Heading 5</H5>

  {/*
         <Carousel style={{ backgroundColor: 'white',  }} data={datatwo} />
  */}


<Avatar/>

<Divider/>

<RoundButton icon = "book"/>

<H2>Test App</H2>

   </ScrollView>
   
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',  
        padding: 30,
        paddingBottom: 130,
      },   
      surf: {
        backgroundColor: 'red'
      } 
});

export default HomeScreen;