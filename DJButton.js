import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class DJButton extends React.Component {
  playSound=async()=>{
    await Audio.Sound.createAsync(
    {uri: this.props.uri,},
    {shouldPlay: true,}
    );
};
  render() {
    return (
      <TouchableOpacity
        style={[styles.soundButton, {backgroundColor:this.props.bgcolor}]}
        onPress={this.playSound}>
        <Text style={styles.soundButtonText}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  soundButton: {
    width:200,
    height:100,
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center",
    borderWidth: 3,
    borderColor: 'rgb(155,255,255)',
         
    
   
  },
  soundButtonText:{ 
    fontSize:18 
    },
});
