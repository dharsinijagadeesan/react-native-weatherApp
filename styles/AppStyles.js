// styles/AppStyles.js
import { StyleSheet } from 'react-native';

const AppStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f4f8',
    },
    input: {
        height: 50,
        borderColor: '#007bff',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#ffffff',
    },
    button: {
         
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    weatherInfo: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        elevation: 5,
        alignItems: 'center',
    },
    city: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 10,
    },
    forecastCard: {
        padding: 15,
        margin: 5,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        elevation: 2,
        alignItems: 'center',
    },
    date: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007bff',
    },
});

export default AppStyles;
