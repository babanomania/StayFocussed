import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlayButton from './components/MusicControls.js';
import CircularBanner from './components/Banners.js'

export default class App extends React.Component {

  _StartMusic() {
    console.log('button clicked');
  }

  render() {
    return (
      <View style={styles.container}>

        <CircularBanner text="RAIN" />
        <PlayButton name="start"/>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});
