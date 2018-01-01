import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CircularBanner extends React.Component {

  render() {
    return (

        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            <Text style={styles.soundName}>
              {this.props.text}
            </Text>
          </View>
        </View>

    );
  }

}

const styles = StyleSheet.create({
  outerCircle: {
    borderRadius: 150,
    width: 300,
    height: 300,
    backgroundColor: 'blue',
  },
  innerCircle: {
    borderRadius: 140,
    width: 280,
    height: 280,
    margin: 10,
    backgroundColor: 'white'
  },
  soundName: {
    fontSize: 75,
    height: 280,
    color: '#141823',
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});

export default CircularBanner
