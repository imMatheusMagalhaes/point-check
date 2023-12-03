import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useAuth } from "../contexts/auth";
import { useLoader } from "../contexts/loader";
import { navigate } from "../router/root";
import { HttpStatusCode } from "axios";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import Separator from "../components/UI/Separator";

function SignIn() {
  const [email, set_email] = React.useState("");
  const [password, set_password] = React.useState("");
  const [name, set_name] = React.useState("");
  const { sign_up } = useAuth();
  const { show_loader, hide_loader } = useLoader();

  async function register() {
    show_loader();
    const response = await sign_up(name, email, password);
    if (response?.status === HttpStatusCode.Created) navigate("Entrar");
    hide_loader();
  }

  return (
    <View className="flex-1 items-center space-y-10 justify-center bg-primary">
      <View className="w-full items-center">
        <Input placeholder="NOME" onChange={set_name} value={name} />
        <Separator />
        <Input placeholder="E-MAIL" onChange={set_email} value={email} />
        <Separator />
        <Input
          placeholder="SENHA"
          onChange={set_password}
          value={password}
          password={true}
        />
      </View>
      <View className="w-4/5 flex-row justify-between">
        <Button onClick={register} text="CADASTRO" variant="colored" />
        <Button onClick={() => navigate("Entrar")} text="ENTRAR" />
      </View>
    </View>
  );
}

export default SignIn;
