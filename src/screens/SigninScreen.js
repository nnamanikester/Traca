import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = ({ navigation }) => {
  navigation.setOptions({
    header: () => {
      return null;
    },
  });

  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  useEffect(() => {
    navigation.addListener("blur", () => {
      clearErrorMessage();
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In To Your Account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />
      <NavLink
        routeName="Signup"
        text="Don't have an account? Sign up instead"
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

export default SigninScreen;
