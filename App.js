import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MusicControl from './components/MusicControls.js';
import CircularBanner from './components/Banners.js';
import styles from './components/style';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <CircularBanner text="RAIN" />
        <MusicControl name="start" style={styles.playButton} />

      </View>
    );
  }

}
