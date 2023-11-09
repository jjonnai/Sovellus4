import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'


const api = {
    url: process.env.EXPO_PUBLIC_API_URL,
    key: process.env.EXPO_PUBLIC_API_KEY,
    icons: process.env.EXPO_PUBLIC_ICONS_URL
  }

export default function Weather() {

    const [temp, setTemp] = useState('')
    const [description, setDescription] = useState('')
    const [icon, setIcon] = useState('')
    const [city, setCity] = useState('');

useEffect(() => {
    const url = api.url +
        'lat=65.000' + 
        '&lon=24.000' +
        '&units=metric' +
        '&appid=' + api.key 


    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then((json) => {
          const cityName = json.name;
            setTemp(json.main.temp)
            setDescription(json.weather[0].description)
            setIcon(api.icons + json.weather[0].icon + '@2x.png')
            setCity(cityName);
        })
        .catch((error) => {
            console.log(error)
        })
  
}, [])


  return (
    <View>
       <Text>{city}</Text>
      <Text>{temp}&#x2103;</Text>
      {icon && 
      <Image source={{uri: icon}} style={{width: 100, height: 100}}/>
        }
      <Text style={{textAlign:'center', fontSize:16}}>{description}</Text>
    </View>
  )
}