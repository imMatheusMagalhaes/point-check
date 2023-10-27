import request from "./request";
import { Alert } from "react-native";

async function get_all() {
  try {
    const response = await request.get("/point")
    return response.data
  } catch (error) {
    Alert.alert("Problema", error.response.data.message)
    console.error(error.response.data);
    throw error
  }
}
async function input() {
  try {
    const response = await request.post("/point/input")
    return response.data
  } catch (error) {
    Alert.alert("Problema", error.response.data.message)
    throw error
  }
}
async function output() {
  try {
    const response = await request.post("/point/output")
    return response.data
  } catch (error) {
    Alert.alert("Problema", error.response.data.message)
    throw error
  }
}

export { get_all, input, output }