'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Moment from 'moment';

//Components
import DayItem from './src/day-item';

class weekdays extends Component {
  render() {
    //View is roughly analogous to <div> tag
    //all other JSX will be inside the <View>
    //Text is essentially a piece of text
    return (
      <View style={styles.container}>
        {this.renderDays()}
      </View>
    );
  }
  renderDays() {
    //Fixed order of days. Doesn't allow for dynamically changing list
    /*
    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                'Friday', 'Saturday'];
    return DAYS.map( (day) => {
      return (
        <DayItem
          key={day}
          day={day} />
      )
    });
    */
    //Now the first day in the list is the today.
    var dayItems = [];
    for (var i = 0; i < 7; i++) {
      var day = Moment().add(i, 'days').format('dddd');
      dayItems.push( <DayItem key={i} day={day} daysUntil={i} /> )
    }
    return dayItems;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  //static styling. change to dynamic styling
  /*
  daysOfTheWeek: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  */
});

AppRegistry.registerComponent('weekdays', () => weekdays);
