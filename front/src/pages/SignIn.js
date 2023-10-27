import * as React from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../contexts/auth';
import { useLoader } from '../contexts/loader';

function SignIn() {
  const [email, set_email] = React.useState("");
  const [password, set_password] = React.useState("");
  const { sign_in } = useAuth();
  const {show_loader, hide_loader } = useLoader();

  async function login() {
    show_loader()
    await sign_in(email, password)
    hide_loader()
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
