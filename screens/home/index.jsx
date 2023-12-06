import React, { useState, useEffect } from "react";
import {
  View,
  Alert,
  Image,
  TouchableHighlight,
  Modal,
  Text,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as Location from "expo-location";
import { styles } from "./styles";
import { GOOGLE_MAPS_APIKEY, OPENWEATHERMAP_API_KEY } from "@env";
import { Speedometer } from "../../components/speedometer/speedometer";
import BotaoPesquisa from "../../assets/botaopesquisa.png";
import axios from "axios";
import { axiosWeatherInstance } from "../../axios";

export const HomeScreen = () => {
  let watchId = null;

  const [icon, setIcon] = useState();
  const [location, setLocation] = useState();
  const [destination, setDestination] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [temp, setTemp] = useState();
  const [speed, setSpeed] = useState();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      // if (status !== 'granted') {
      //   setErrorMsg('Permission to access location was denied');
      //   return;
      // }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      axiosWeatherInstance
        .get(
          `?lat=${location.coords.latitude}&lon=${location.coords.longitude}&key=b3366e73ebde4ded8e3a25636e4371c2&lang=pt`
        )
        .then((response) => {
          setIcon(response.data.data[0].weather.icon);
          setTemp(response.data.data[0]);
        });

      watchId = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 1000,
          distanceInterval: 1,
        },
        (location) => {
          const speed = location.coords.speed; // velocidade em metros por segundo
          const speedKmH = speed * 3.6; // velocidade em km/h
          setSpeed(speedKmH);
        }
      );
    })();
    return () => {
      if (watchId) {
        watchId.remove();
      }
    };
  }, []);
  setTimeout(async () => {
    setLocation(await Location.getCurrentPositionAsync({}));
  }, 500);

  setTimeout(() => {
    axiosWeatherInstance
      .get(
        `?lat=${location.coords.latitude}&lon=${location.coords.longitude}&key=b3366e73ebde4ded8e3a25636e4371c2&lang=pt`
      )
      .then((response) => {
        setIcon(response.data.data[0].weather.icon);
        setTemp(response.data.data[0]);
      })
      .catch((error) => {
        console.error("Erro ao obter dados meteorológicos:", error);
      });
  }, 600000);

  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  const handleClick = () => {
    setModalVisible(true);
  };

  const mapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#242f3e",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#746855",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#242f3e",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "poi.business",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#263c3f",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#6b9a76",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#38414e",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#212a37",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9ca5b3",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#746855",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#1f2835",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#f3d19c",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#2f3948",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#17263c",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#515c6d",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#17263c",
        },
      ],
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      {location && (
        <MapView
          showsCompass={false}
          style={styles.map}
          loadingEnabled={true}
          customMapStyle={mapStyle}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Minha localização"
          />
          {location && destination && (
            <MapViewDirections
              origin={location.coords}
              destination={destination}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="lime"
            />
          )}
        </MapView>
      )}
      <Speedometer speed={speed} />
      {temp && (
        <View style={styles.weatherView}>
          <Text style={styles.weatherText}>{temp.temp}°C</Text>
          <Image
            style={styles.weatherIcon}
            source={{
              uri: `https://www.weatherbit.io/static/img/icons/${temp.weather.icon}.png`,
            }}
          />
          <Text style={styles.weatherText}>{temp.rh}% 💧</Text>
          <Text style={styles.weatherText}>
            {temp.wind_spd.toFixed(1)} m/s 💨
          </Text>
          <Text style={styles.weatherText}>{temp.precip} mm/hr 🌧</Text>
          <Text style={styles.weatherText}>
            {(parseInt(temp.uv) / 11) * 100}% ☀️
          </Text>
        </View>
      )}
      <TouchableOpacity style={styles.searchButton} onPress={handleClick}>
        <Image source={BotaoPesquisa} />
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View style={styles.modalView}>
            <TouchableHighlight onPress={toggleModalVisible}>
              <Text>Voltar</Text>
            </TouchableHighlight>
          </View>
          <GooglePlacesAutocomplete
            placeholder="Search"
            fetchDetails={true}
            textInputProps={{
              placeholderTextColor: "white",
            }}
            styles={{
              textInput: {
                marginTop: 15,
                marginLeft: 10,
                backgroundColor: "transparent",
                borderWidth: 2,
                borderColor: "white",
                height: 38,
                color: "white",
                fontSize: 16,
              },
              listView: {
                marginLeft: 10,
              },
            }}
            onPress={(data, details = null) => {
              if (details) {
                setDestination({
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                });
              }
              toggleModalVisible();
            }}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "pt-br",
            }}
          />
        </View>
      </Modal>
    </View>
  );
};
