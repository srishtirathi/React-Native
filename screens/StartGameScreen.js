import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const StartGameScreen = ( props ) =>
{
    return (
        <View style={ styles.screen }>
            <Text style={ styles.title }>Start A New Game!</Text>
            <View style={ styles.inputContainer }>
                <Text>Enter A Number</Text>
                <TextInput />
                <View style={ styles.buttonContainer }>
                    <Button title="Rest" onPress={ () => { } } />
                    <Button title="Confirm" onPress={ () => { } } />
                </View>
            </View>
        </View> )

}

const styles = StyleSheet.create( {
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
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 6,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
} );

export default StartGameScreen;
