import * as React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../contexts/auth';
import { useLoader } from '../contexts/loader';
import { navigate } from '../router/root';
import { HttpStatusCode } from 'axios';

function SignIn() {
  const [email, set_email] = React.useState("");
  const [password, set_password] = React.useState("");
  const [name, set_name] = React.useState("");
  const { sign_up } = useAuth();
  const { show_loader, hide_loader } = useLoader();

  async function register() {
    show_loader()
    const response = await sign_up(name, email, password)
    if (response?.status === HttpStatusCode.Created)
      navigate("Entrar")
    hide_loader()
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={styles.input}
        onChangeText={set_name}
        value={name}
        placeholder="Nome"
      />
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
      <TouchableOpacity style={styles.button} onPress={register}>
        <Text style={{ color: "white", textAlign: "center" }}>Cadastrar</Text>
      </TouchableOpacity>
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
});

export default SignIn;
