import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/color'
const StartGameScreen = ( props ) =>
{
    return (
        <View style={ styles.screen }>
            <Text style={ styles.title }>Start A New Game!</Text>
            <Card style={ styles.inputContainer }>
                <Text>Enter A Number</Text>
                <TextInput />
                <View style={ styles.buttonContainer }>
                    <View style={ styles.button }>
                        <Button title="Rest" onPress={ () => { } } color={ Colors.accent } />
                    </View>
                    <View style={ styles.button } >
                        <Button title="Confirm" onPress={ () => { } } color={ Colors.primary } />
                    </View>
                </View>
            </Card>
        </View> )

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
    }
} );

export default StartGameScreen;


// Always wrap button in a view to apply styles on them