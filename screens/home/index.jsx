import React, { Component } from "react";
import { View } from "react-native";
//import MapView, { Marker } from "react-native-maps";
import { styles } from "./styles";

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialRegion: {
        latitude: -23.5489,
        longitude: -46.6388,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  render() {
    // return (
    //   <View style={styles.container}>
    //     <MapView style={{ flex: 1 }} initialRegion={this.state.initialRegion}>
    //       <Marker
    //         coordinate={{ latitude: -23.5489, longitude: -46.6388 }}
    //         title="Você está aqui"
    //         description="Localização do usuário de bicicleta"
    //       />
    //     </MapView>
    //   </View>
    // );
  }
}

export default HomeScreen;
