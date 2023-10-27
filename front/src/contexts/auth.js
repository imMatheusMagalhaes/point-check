import { createContext, useContext, useEffect, useState } from "react";
import * as auth from "../services/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../components/Loader";
import request from "../services/request";
const AuthContext = createContext({});



function AuthProvider({ children }) {
  const [token, set_token] = useState(null);
  const [loading, set_loading] = useState(true);

  async function sign_in(email, password) {
    const response = await auth.sign_in(email, password);
    request.defaults.headers.Authorization = `${response.token}`;
    await AsyncStorage.setItem('@RNAuth:token', response.token);
    set_token(response.token);
  }

  async function sign_out() {
    set_token(null);
    await AsyncStorage.clear();
  }

  useEffect(() => {
    async function loadStorageData() {
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
      if (storagedToken) {
        set_token(storagedToken);
        request.defaults.headers.Authorization = `${storagedToken}`;
      }
      set_loading(false)
    }
    loadStorageData();
  });

  if (loading)
    return <Loader />

  return <AuthContext.Provider value={{ signed: !!token, user: {}, loading, sign_in, sign_out }}>
    {children}
  </AuthContext.Provider>
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }
  return context;
}

export { AuthProvider, useAuth };