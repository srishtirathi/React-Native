import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from '../components/Card';
const StartGameScreen = ( props ) =>
{
    return (
        <View style={ styles.screen }>
            <Text style={ styles.title }>Start A New Game!</Text>
            <Card style={ styles.inputContainer }>
                <Text>Enter A Number</Text>
                <TextInput />
                <View style={ styles.buttonContainer }>
                    <Button title="Rest" onPress={ () => { } } />
                    <Button title="Confirm" onPress={ () => { } } />
                </View>
            </Card>
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
    }
} );

export default StartGameScreen;
