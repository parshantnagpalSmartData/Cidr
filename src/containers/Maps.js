/*
Name : Parshant Nagpal
File Name : Maps.js
Description : Contains the Maps Tab
Date : 6 Sept 2018
*/

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import Constants from "../constants";
// import Styles from "../styles";

class Maps extends Component {
  render() {
    return (
      <View>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          style={styles.mapStyle}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mapStyle: {
    height: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 95,
    width: Constants.BaseStyle.DEVICE_WIDTH,
    borderWidth: 1,
    borderColor: Constants.Colors.Red
  }
});
export default Maps;
