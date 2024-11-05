// screens/CurrentWeatherScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import AppStyles from '../styles/AppStyles';

const CurrentWeatherScreen = () => {
    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState(null);
    const API_KEY = 'e5be4d5d2f2d7c9a700f32006b3b7d44'; // Replace with your OpenWeatherMap API key

    const fetchWeather = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
            );
            setWeather(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={AppStyles.container}>
            <TextInput
                placeholder="Enter location"
                value={location}
                onChangeText={setLocation}
                style={AppStyles.input}
            />
            <View style={AppStyles.button}>
                <Button title="Get Weather" onPress={fetchWeather} color="#007bff" />
            </View>
            {weather && (
                <View style={AppStyles.weatherInfo}>
                    <Text style={AppStyles.city}>{weather.name}</Text>
                    <Text>Temperature: {Math.round(weather.main.temp)}°C</Text>
                    <Text>Humidity: {weather.main.humidity}%</Text>
                    <Text>Wind Speed: {weather.wind.speed} m/s</Text>
                    <Text>Description: {weather.weather[0].description}</Text>
                </View>
            )}
        </View>
    );
};

export default CurrentWeatherScreen;
