import * as React from 'react';
import { Text, View, Button, TouchableOpacity,StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import DJButton from './DJButton';
import AppHeader from './AppHeader';


export default class App extends React.Component {
  render() {
  return (
  <View>
  <AppHeader />
  <View style={styles.musicButtonContainer}>
  <DJButton
   uri='http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'
   text="Press Me"
    bgcolor="purple"/>
    </View>

    <View style={styles.musicButtonContainer}>
    <DJButton
    uri='http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'
    text="Press Me"
    bgcolor="yellow"/>
    </View>

    <View style={styles.musicButtonContainer}>
    <DJButton
    uri='http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'
    text="Press Me"
    bgcolor="green"/>
    </View>

    <View style={styles.musicButtonContainer}>
    <DJButton
    uri='http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'
      text="Press Me"
      bgcolor="blue"/>
        </View>

    <View style={styles.stopButtonContainer}>
    <TouchableOpacity
      style = {styles.stopButton} 
      onPress={()=>{
       Audio.setIsEnabledAsync(false);
      }}>
      <Text>STOP MUSIC</Text>
      </TouchableOpacity>
      </View>

      </View>
  );
 }
}
const styles = StyleSheet.create({
   stopButtonContainer:{
    justifyContent:"center", 
    alignItems:"center",
    marginTop:40
  },

   musicButtonContainer:{
    justifyContent:'center', 
    alignItems:'center',
   },

  stopButton:{
    width:'80%',
    height:70,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:30,
    backgroundColor:'red',
    borderWidth:2,
    borderColor :'rgb(155,255,255)',
  }
});

