import { HttpStatusCode } from "axios";
import request from "./request";
import { Alert } from "react-native";

const HttpError = {
  [HttpStatusCode.BadRequest]: HttpStatusCode.BadRequest,
  [HttpStatusCode.NotFound]: HttpStatusCode.NotFound,
}

const sign_in = async function (email, password) {
  try {
    const response = await request.post("/auth/sign-in", { email, password })
    return response.data
  } catch (error) {
    if (error.response?.data?.status in HttpError)
      return Alert.alert("Problema", error.response.data.message)
    throw error
  }
}

const sign_up = async function (name, email, password) {
  try {
    const response = await request.post("/auth/sign-up", { name, email, password })
    return response.data
  } catch (error) {
    if (error.response?.data?.status in HttpError)
      return Alert.alert("Problema", error.response.data.message)

    throw error
  }
}

export { sign_in, sign_up }