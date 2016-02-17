'use strict'

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class DayItem extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Text style={this.getStyle()}>
        {this.props.day}
      </Text>
    )
  }
  getStyle(){
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight(),
    }
  }
  color(){
    var opacity= 1 / (this.props.daysUntil+1);
    return 'rgba(0, 0, 0, '+opacity+')';
  }
  fontWeight(){
    var weight = 7 - this.props.daysUntil;
    return String(weight * 100);
  }
  fontSize(){
    return 60 - 6 * this.props.daysUntil;
  }
  lineHeight(){
    return 70-4*this.props.daysUntil;
  }

}

//static styling
//remove and use dynamic styling instead.
const styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#000FFF'
  }
})

export default DayItem;
