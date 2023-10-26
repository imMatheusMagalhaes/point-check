import * as React from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { sign_in } from '../services/auth';

function Home() {
  const [email, set_email] = React.useState("");
  const [password, set_password] = React.useState("");
  const [is_loading, set_is_loading] = React.useState(false);

  const login = async function () {
    set_is_loading(true)
    set_is_loading(false)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity style={styles.button} onPress={login}>
        {!is_loading ? <Text style={{ color: "white", textAlign: "center" }}>Entrar</Text> :
          <ActivityIndicator color="white" />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "90%",
    backgroundColor: "black",
  },
});

export default Home;
