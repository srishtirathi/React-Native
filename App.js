import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
export default function App ()
{
  const [ userNumber, setUserNumber ] = useState();
  const startGameHandler = ( selectedNumber ) =>
  {
    setUserNumber( selectedNumber );
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>

  if ( userNumber )
  {
    content = <GameScreen userChoice={userNumber} />
  }
  return (

    <View style={ styles.screen }>
      <Header title="Guess A Number!" />
      { content }
    </View>
  );
}

const styles = StyleSheet.create( {
  screen: {
    flex: 1,
  }
} );
