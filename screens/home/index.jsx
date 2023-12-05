import React, { createRef } from "react";
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

export class HomeScreen extends React.Component {
  watchId = null;

  constructor(props) {
    super(props);
    this.searchRef = React.createRef();
  }

  state = {
    location: null,
    destination: null,
    modalVisible: false,
    temperature: null,
    weather: null,
    humidity: null,
  };

  updateWeather = () => {
    if (this.state.location) {
      const { latitude, longitude } = this.state.location;

      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={1a7cd3764008259161f0aeb18f361382}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          this.setState({
            temperature: data.main.temp,
            weather: data.weather[0].main,
            humidity: data.main.humidity,
          });
        })
        .catch((error) =>
          console.error(
            "There was a problem with the fetch operation: " + error.message
          )
        );
    }
  };

  async componentDidMount() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission to access location was denied");
      return;
    }

    this.watchId = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (location) => {
        const speed = location.coords.speed; // velocidade em metros por segundo
        const speedKmH = speed * 3.6; // velocidade em km/h
        this.setState({ location, speed: speedKmH });
      }
    );
    this.updateWeather();
  }

  componentWillUnmount() {
    if (this.watchId) {
      this.watchId.remove();
    }
  }

  handleSelectDestination = (data, details) => {
    if (details.geometry) {
      const { location } = details.geometry;
      this.setState({
        destination: { latitude: location.lat, longitude: location.lng },
      });
    }
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  handleClick = () => {
    this.setModalVisible(true);
  };

  render() {
    mapStyle = [
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
    const { location } = this.state;

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
            {location && this.state.destination && (
              <MapViewDirections
                origin={location.coords}
                destination={this.state.destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="lime"
              />
            )}
          </MapView>
        )}
        <Speedometer speed={this.state.speed} />
        <View style={styles.weatherView}>
          <Text style={styles.weatherText}>
            {this.state.temperature && this.state.temperature.toFixed(1)}
            {"°C"}
          </Text>
          <Text style={styles.weatherText}>
            {this.state.weather && this.state.weather}
          </Text>
          <Text style={styles.weatherText}>
            {this.state.humidity && this.state.humidity.toFixed(0)}
            {"%"}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={this.handleClick}
        >
          <Image source={BotaoPesquisa} />
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <View style={styles.modalView}>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Hide</Text>
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
                // 'details' is provided when fetchDetails = true
                this.setState({
                  destination: {
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                  },
                });
                this.setModalVisible(!this.state.modalVisible);
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
  }
}
