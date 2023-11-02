import React, { Component } from 'react';
import { StyleSheet, View, ScrollView,Text } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import { GlobalStyles } from '../libs/layout/constants/Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Calendar, LocaleConfig} from 'react-native-calendars';

export default class Ledger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['ID', 'Head1', 'Head2', 'Head3', 'Head4',],
      widthArr: [40, 60, 80, 100, 120,]
    
    }
  }
  
  render() 
  {

    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 21; i++) {
      const rowData = [];
      for (let j = 0; j < 9; j ++) {
        rowData.push(`${i}`);
      }
      tableData.push(rowData);
    }

    return (
      <View style={styles.container}>
        <View style={{alignItems:'center',justifyContent:'center',marginBottom:10}}>
            <Text style={{fontSize:30,fontWeight:'600'}}>
                Current Month Ledger
            </Text>
        </View>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
      

               
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text1}
                    />
                  ))
                }
              </Table>
      
            </ScrollView>
          </View>
        </ScrollView>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '800',color:'white' },
  text1: { textAlign: 'center', fontWeight: '500', },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});