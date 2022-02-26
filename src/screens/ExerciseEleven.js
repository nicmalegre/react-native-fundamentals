import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

class ExerciseEleven extends Component {
  state = {
    count: 0,
  };

  render() {
    const {count} = this.state;
    return (
      <View>
        <Button
          title="Add one"
          onPress={() =>
            this.setState(prevState => ({count: prevState.count + 1}))
          }>
          Add one
        </Button>

        <View style={style.subSection}>
          <Text style={style.text}>
            You have pressed the button: {count} {count > 1 ? 'times' : 'time'}
          </Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  subSection: {
    padding: 20,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
});

export default ExerciseEleven;
