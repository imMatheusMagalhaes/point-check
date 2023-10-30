import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../contexts/auth';
import { get_all, input, output } from "../services/point";
import { useLoader } from '../contexts/loader';

function Home() {
  const { sign_out } = useAuth();
  const [is_output, set_is_output] = React.useState()

  const { show_loader, hide_loader } = useLoader();

  function handleSignOut() {
    sign_out();
  }
  async function handle_point(method) {
    show_loader()
    await method();
    set_is_output(!is_output)
    hide_loader()
  }

  async function handler_point_check() {
    const points = await get_all()
    const is_output = points.some(point => !point.outputTime)
    set_is_output(is_output)
  }

  React.useEffect(() => {
    handler_point_check()
  }, [])


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity style={styles.button} onPress={is_output ? () => handle_point(output) : () => handle_point(input)}>
        <Text style={{ color: "white", textAlign: "center" }}>{is_output ? "Sair" : "Entrar"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'black',
  },
});

export default Home;
