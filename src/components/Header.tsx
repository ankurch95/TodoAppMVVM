import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';

interface HeaderProps {
    onPress: () => void;
    title: string;
}

const Header = (props: HeaderProps) => {
    const { onPress, title } = props;
    return (
        <View style={styles.headingView}>
            <Pressable onPress={onPress}>
                <Image
                    source={require('../assets/images/arrow.png')}
                    style={ styles.backIcon}
                />
            </Pressable>
            <Text style={styles.heading}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headingView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 20,
    },
    backIcon: {
        width: 20,
        height: 20,
        marginLeft: 10
    }
});

export default Header;