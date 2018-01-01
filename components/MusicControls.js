import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class PlayButton extends React.Component {

  _StartMusic() {
    console.log('button clicked');
  }

  render() {
    return (
      <TouchableOpacity
        style={sPlaybutton.playButton}
        onPress={this._StartMusic}
        activeOpacity = { .5 }>

        <Ionicons name="md-play" size={20} color="white" >
          <Text style={sPlaybutton.TextStyle}> {this.props.name} </Text>
        </Ionicons>

      </TouchableOpacity>
    );
  }
}

const sPlaybutton = StyleSheet.create({

  playButton: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    padding: 30,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#00BCD4',
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff'
  },

  TextStyle:{
      color:'#fff',
      textAlign:'center',
  }
});


export default PlayButton
