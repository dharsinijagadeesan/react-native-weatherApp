// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CurrentWeatherScreen from './screens/CurrentWeatherScreen';
import ForecastScreen from './screens/ForecastScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="CurrentWeather" component={CurrentWeatherScreen} />
                <Stack.Screen name="Forecast" component={ForecastScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
