// components/Background.js
import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const Background = ({ children }) => {
    return (
        <ImageBackground
            source={require('../assets/bg.jpg')} // Background image path
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>{children}</View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add a white overlay for better readability
        borderRadius: 10,
        padding: 20,
    },
});

export default Background;
