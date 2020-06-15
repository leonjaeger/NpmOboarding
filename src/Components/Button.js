import React from 'react';
import {StyleSheet,View,TouchableOpacity,Text} from 'react-native';

const Button = ({ color, colorFondo, onPress, titleButton }) => {
    return (
        <View>
            <TouchableOpacity
                style={[
                    styles.boton,
                    { borderColor: color, backgroundColor: colorFondo }
                ]}
                onPress={onPress}
            >
                <Text style={[styles.texto, { color: color }]}>
                    {titleButton}
                </Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    boton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        width: 90,
        height:30,
        marginBottom: 12,
        borderRadius: 100,
        borderWidth: 0.5,
    },
    texto: {
        textAlign: 'center',
        height: 22,
        fontSize: 20,
        fontWeight: 'bold'
    },
});

export default Button;