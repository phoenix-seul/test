import React,{Component} from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button
} from 'react-native';

import { DatePickerView } from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker-view/locale/en_US';

import {RkButton} from 'react-native-ui-kitten';

export default class App extends Component{
  
  render() {
    return ( 
      <DatePicker/>
    );
  }
}


class DatePicker extends Component {
  state = {
    value: null,
  };
  onChange = (value) => {
    console.log(value);
    this.setState({ value });
  };
  onValueChange = (...args) => {
    console.log(args);
  };


  render () {
    return (
      <View>

      
          <div>
            <div className="sub-title">
              <Text>
                
                Start datetime
              </Text>
            </div>
            <DatePickerView
              value={this.state.value}
              onChange={this.onChange}
              onValueChange={this.onValueChange}
            />
            {/* <div className="sub-title">End datetime</div> */}
          <DatePickerView
            locale={enUs}
            value={this.state.value}
            onChange={this.onChange}
            onValueChange={this.onValueChange}
          />
        </div>
      </View>
    )
  }
}
  const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      margin:10,
      backgroundColor: 'pink' 
    },
    textStyle:{
    fontSize:20,
    color:'#000',
    textAlign:'center',
    marginBottom:18
    },
    InputStyle:{
      height:40,
      textAlign:'center',
      marginBottom:8,
      borderWidth:1,
      borderColor:'purple',
      borderRadius:5
    }
});