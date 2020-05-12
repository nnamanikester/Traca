import React, { useEffect, useContext } from "react";
import { Text } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const AppLoading = ({ navigation }) => {
  const { tryLocalSignin } = useContext(AuthContext);

  navigation.setOptions({
    header: () => null,
  });

  useEffect(() => {
    tryLocalSignin(navigation);
  }, []);

  return null;
};

export default AppLoading;
