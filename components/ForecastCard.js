// components/ForecastCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppStyles from '../styles/AppStyles';

const ForecastCard = ({ forecast }) => {
    return (
        <View style={AppStyles.forecastCard}>
            <Text style={AppStyles.date}>{forecast.date}</Text>
            <Text>Average Temperature: {forecast.avgTemp}°C</Text>
            <Text>Average Humidity: {forecast.avgHumidity}%</Text>
            <Text>Average Wind Speed: {forecast.avgWindSpeed} m/s</Text>
            <Text>Description: {forecast.description}</Text>
        </View>
    );
};

export default ForecastCard;
