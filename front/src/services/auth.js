import request from "./request";
import { Alert } from "react-native";

const sign_in = async function (email, password) {
  try {
    const response = await request.post("/auth/sign-in", { email, password })
    return response.data
  } catch (error) {
    Alert.alert("Problema", error.response.data.message)
    throw error
  }
}

export { sign_in }