import * as React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../contexts/auth';
import { useLoader } from '../contexts/loader';
import { Link } from "@react-navigation/native";
import { navigate } from '../router/root';
import { HttpStatusCode } from 'axios';

function SignIn() {
  const [email, set_email] = React.useState("");
  const [password, set_password] = React.useState("");
  const { sign_in } = useAuth();
  const { show_loader, hide_loader } = useLoader();

  async function login() {
    show_loader()
    const response = await sign_in(email, password)
    if (response?.status === HttpStatusCode.Ok)
      navigate("Home")
    hide_loader()
  }

  return (
    <View className="flex-1 items-center justify-center">
      <TextInput
        style={styles.input}
        onChangeText={set_email}
        value={email}
        placeholder="Email"
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.input}
        onChangeText={set_password}
        value={password}
        secureTextEntry={true}
        placeholder="Senha"
      />
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={{ color: "white", textAlign: "center" }}>Entrar</Text>
      </TouchableOpacity>
      <Link style={styles.actionButton} to={{ screen: 'Cadastro' }} >
        Cadastro
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "90%"
  },
  button: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "90%",
    backgroundColor: "black",
  },
  actionButton: {
    marginTop: "50%",
    borderColor: "black",
    borderWidth: 1,
    padding: 5
  }
});

export default SignIn;
