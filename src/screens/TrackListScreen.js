import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TracListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>TracList Screen</Text>

      <Button
        title="Go To Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TracListScreen;
