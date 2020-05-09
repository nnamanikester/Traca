import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SigninScreen = ({ navigation }) => {
  return (
    <>
      <Text>Signin Screen</Text>
      <Button
        title="Go To Signup"
        onPress={() => navigation.navigate("Signup")}
      />
      <Button
        title="Go To MainFLow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
