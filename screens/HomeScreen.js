// screens/HomeScreen.js
import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import AppStyles from '../styles/AppStyles';
import Background from '../components/Background';

const HomeScreen = ({ navigation }) => {
    return (
        <Background>
        <View style={AppStyles.container}>
            <Text style={styles.title}>Weather App</Text>
            
            <Button style={AppStyles.button}
                title="Current Weather"
                onPress={() => navigation.navigate('CurrentWeather')}
                color="#007bff"
            />
            
            <Button
                title="Forecast" style={AppStyles.button}
                onPress={() => navigation.navigate('Forecast')}
                color="#007bff"
            />
        </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#007bff',
        textAlign: 'center',
        marginBottom: 40,
    },
});

export default HomeScreen;
