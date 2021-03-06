import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Card = ( props ) =>
{
    return (
        <View style={ { ...styles.card, ...props.style } }>
            { props.children }
        </View> )

}

const styles = StyleSheet.create( {
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 6,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
} );

export default Card;
