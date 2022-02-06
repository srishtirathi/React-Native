import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/color'
import Input from '../components/Input'
import React, { useState } from 'react';
const StartGameScreen = ( props ) =>
{
    const [ enteredValue, setEnteredValue ] = useState( '' );
    const [ isConfirmed, setConfirmed ] = useState( false );
    const [ selectedNumber, setSelectedNumber ] = useState();

    const numberInputHandler = inputText =>
    {
        setEnteredValue( inputText.replace( /[^0-9]/g, '' ) );
    }
    const resetInputHandler = () =>
    {
        setEnteredValue( '' );
        setConfirmed( false );
    }

    const confirmInputHandler = () =>
    {
        const chosenNumber = parseInt( enteredValue );
        if ( isNaN( chosenNumber ) || chosenNumber < 0 || chosenNumber > 99 )
        {
            Alert.alert( 'Invalid Number', 'Number has to be between 0 and 99', [ { text: 'Okay', style: 'destructive', onPress: { resetInputHandler } } ] );
            return;
        }
        setConfirmed( true );
        setSelectedNumber( chosenNumber );
        setEnteredValue( '' );
    }
    let confirmedOutput;
    if ( isConfirmed )
    {
        confirmedOutput = ( <Card style={ styles.confirmCard }>
            <Text>Your Selected Number</Text>
            <Text style={ styles.finalNumber }> { selectedNumber }</Text>
            <Button title='Confirm' />
        </Card> )
    }
    return (
        <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss(); } }>
            <View style={ styles.screen }>
                <Text style={ styles.title }>Start A New Game!</Text>
                <Card style={ styles.inputContainer }>
                    <Text>Enter A Number</Text>
                    <Input style={ styles.input }
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect='false'
                        keyboardType="number-pad"
                        maxLength={ 2 }
                        value={ enteredValue }
                        onChangeText={ numberInputHandler } />
                    <View style={ styles.buttonContainer }>
                        <View style={ styles.button }>
                            <Button title="Reset" onPress={ resetInputHandler } color={ Colors.accent } />
                        </View>
                        <View style={ styles.button } >
                            <Button title="Confirm" onPress={ confirmInputHandler } color={ Colors.primary } />
                        </View>
                    </View>
                </Card>
                { confirmedOutput }
            </View>
        </TouchableWithoutFeedback> )

}

const styles = StyleSheet.create( {
    button: {
        width: 100,
    },
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 24,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    input: {
        width: 70,
        textAlign: 'center'
    },
    confirmCard: {
        marginTop: 20,
        alignItems: 'center'
    },
    finalNumber: {
        marginTop: 10,
        borderColor: Colors.accent,
        borderWidth: 1,
        padding: 10,
        color: Colors.accent,
    }
} );

export default StartGameScreen;


// Always wrap button in a view to apply styles on them