import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Navigation } from "@react-navigation/native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  navigation.setOptions({
    header: () => {
      return null;
    },
  });
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  useEffect(() => {
    navigation.addListener("blur", () => {
      clearErrorMessage();
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up For Traca"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
  },
});

export default SignupScreen;
