import * as React from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { sign_in } from '../services/auth';

function SignIn({ navigation }) {
  const [email, set_email] = React.useState("");
  const [password, set_password] = React.useState("");
  const [is_loading, set_is_loading] = React.useState(false);

  const login = async function () {
    set_is_loading(true)
    await sign_in(email, password)
    set_is_loading(false)
    navigation.push('Home')
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
        {!is_loading ? <Text style={{ color: "white", textAlign: "center" }}>Entrar</Text> :
          <ActivityIndicator color="white" />}
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
