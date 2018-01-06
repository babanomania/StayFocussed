import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';

class MusicControl extends React.Component {

  _StartMusic() {
    console.log('button clicked');
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.button, this.props.style]}
        onPress={this._StartMusic}
        activeOpacity = { .5 }>

        <Ionicons name="md-play" size={20} color="white" >
          <Text style={styles.TextStyle}> {this.props.name} </Text>
        </Ionicons>

      </TouchableOpacity>
    );
  }
}

export default MusicControl
