import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ButtonProps {
    onPress: () => void;
    title: string;
    backgroundColor: string
}

const Button = (props: ButtonProps) => {
    const { onPress, title, backgroundColor } = props;
    return (
        <TouchableOpacity
            style={{ ...styles.btn, backgroundColor: backgroundColor }}
            onPress={onPress}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#0476D0',
        alignItems: 'center',
        marginVertical: 8,
    },
    btnText: {
        fontSize: 16,
        fontWeight: '400',
        paddingHorizontal: 8,
        color: '#fff'
    },
});

export default Button;