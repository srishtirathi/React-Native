import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/color'

const GameScreen = ( props ) =>
{
    const generateRandomBetween = ( min, max, exclude ) =>
    {
        min = Math.ceil( min );
        max = Math.ceil( max );
        const rndNum = Math.floor( Math.random() * ( max - min ) ) + min;
        if ( rndNum === exclude )
        {
            return generateRandomBetween( min, max, exclude )
        }
        else
        {
            return rndNum;
        }

    }
    const [ currentGuess, setCurrentGuess ] = useState( generateRandomBetween( 1, 100, props.userChoice ) )
    return (
        <View style={ styles.screen }>
            <Text>Opponent's Guess</Text>
            <Text style={ styles.finalNumber }> { currentGuess }</Text>
            <Card style={ styles.buttonContainer }>
                <Button title="Lower" />
                <Button title="Greater" />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create( {
    finalNumber: {
        marginTop: 10,
        borderColor: Colors.accent,
        borderWidth: 1,
        padding: 10,
        color: Colors.accent,
    },
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
} );

export default GameScreen;
