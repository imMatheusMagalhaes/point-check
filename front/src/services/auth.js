import axios from "axios";
import request from "./request";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";

const sign_in = async function (email, password) {
  try {
    const response = await request().post("/auth/sign-in", { email, password })
    await AsyncStorage.setItem('token', response.data.token);
    Alert.alert("Sucesso", "Login entuado")
  } catch (error) {
    Alert.alert("Problema", error.response.data.message)
  }
}

export { sign_in }