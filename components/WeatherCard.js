// components/WeatherCard.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherCard = ({ weather }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.city}>{weather.name}</Text>
            <Image
                source={{ uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png` }}
                style={styles.icon}
            />
            <Text style={styles.temp}>{Math.round(weather.main.temp)}°C</Text>
            <Text style={styles.description}>{weather.weather[0].description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 20,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
        alignItems: 'center',
    },
    city: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    icon: {
        width: 100,
        height: 100,
    },
    temp: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        textTransform: 'capitalize',
    },
});

export default WeatherCard;
