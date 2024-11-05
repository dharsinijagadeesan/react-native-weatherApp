// screens/ForecastScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, Text } from 'react-native';
import axios from 'axios';
import ForecastCard from '../components/ForecastCard';
import AppStyles from '../styles/AppStyles';

const ForecastScreen = () => {
    const [location, setLocation] = useState('');
    const [days, setDays] = useState('5');
    const [forecast, setForecast] = useState([]);
    const API_KEY = 'e5be4d5d2f2d7c9a700f32006b3b7d44'; // Replace with your OpenWeatherMap API key

    const fetchForecast = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`
            );

            const forecastData = response.data.list;

            // Grouping forecast data by date
            const groupedForecast = {};
            forecastData.forEach(item => {
                const date = item.dt_txt.split(' ')[0]; // Extracting the date part
                if (!groupedForecast[date]) {
                    groupedForecast[date] = {
                        temperature: [],
                        humidity: [],
                        windSpeed: [],
                        description: item.weather[0].description,
                    };
                }
                groupedForecast[date].temperature.push(item.main.temp);
                groupedForecast[date].humidity.push(item.main.humidity);
                groupedForecast[date].windSpeed.push(item.wind.speed);
            });

            // Calculating average values for each day
            const dailyForecast = Object.keys(groupedForecast).slice(0, days).map(date => ({
                date,
                avgTemp: (groupedForecast[date].temperature.reduce((a, b) => a + b, 0) / groupedForecast[date].temperature.length).toFixed(1),
                avgHumidity: (groupedForecast[date].humidity.reduce((a, b) => a + b, 0) / groupedForecast[date].humidity.length).toFixed(1),
                avgWindSpeed: (groupedForecast[date].windSpeed.reduce((a, b) => a + b, 0) / groupedForecast[date].windSpeed.length).toFixed(1),
                description: groupedForecast[date].description,
            }));

            setForecast(dailyForecast);
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
            <TextInput
                placeholder="Number of days (1-5)"
                value={days}
                onChangeText={setDays}
                keyboardType="numeric"
                style={AppStyles.input}
            />
            <View style={AppStyles.button}>
                <Button title="Get Forecast" onPress={fetchForecast} color="#007bff" />
            </View>
            <ScrollView>
                {forecast.map((item) => (
                    <ForecastCard key={item.date} forecast={item} />
                ))}
            </ScrollView>
        </View>
    );
};

export default ForecastScreen;
