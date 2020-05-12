import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ route: { params }, navigation }) => {
  const { state } = useContext(TrackContext);
  const { _id } = params;
  const track = state.find((t) => t._id === _id);

  navigation.setOptions({
    headerTitle: track.name,
  });

  const initialCoords = track.locations[0].coords;
  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default TrackDetailScreen;
