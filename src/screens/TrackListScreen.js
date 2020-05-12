import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Context as TrackContext } from "../context/TrackContext";
import { ListItem } from "react-native-elements";

const TracListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  useFocusEffect(() => {
    fetchTracks();
  }, []);

  if (!state)
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;

  return (
    <>
      <Text>TracList Screen</Text>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetail", { _id: item._id })
              }
            >
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TracListScreen;
