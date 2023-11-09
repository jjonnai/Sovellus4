import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location';
import Weather from './Weather';

export default function MyLocation() {

    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [info, setInfo] = useState('Loading..')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
    (async() => {
        let {status} = await Location.requestForegroundPermissionsAsync()
        console.log(status)
        try {
            if (status !== 'granted'){
                setInfo("Location not permitted.")
            } else {
                const position = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High})
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
                setInfo('Location')
                console.log(position.coords.latitude)
                console.log(position.coords.longitude)
            }
        } catch (error) {
            setInfo("Error retrieving location.")
            console.log(error)
        }
        setIsLoading(false)
    })()
  
    }, [])
    


    return (
        <View>
            <Text style={styles.message}>{info}</Text>
            {isLoading === false &&
                <Weather latitude={latitude} longitude={longitude} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    coord: {
        fontSize:16,
        marginBottom:8,
    },
    message:{
        marginTop:8,
        fontWeight:'bold',
        fontSize:16
    }
  });