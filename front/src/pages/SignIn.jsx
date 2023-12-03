import React, { useState } from "react";
import { View } from "react-native";
import { useAuth } from "../contexts/auth";
import { useLoader } from "../contexts/loader";
import { navigate } from "../router/root";
import { HttpStatusCode } from "axios";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import Separator from "../components/UI/Separator";

function SignIn() {
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");

  const { sign_in } = useAuth();
  const { show_loader, hide_loader } = useLoader();

  async function login() {
    show_loader();
    const response = await sign_in(email, password);
    if (response?.status === HttpStatusCode.Ok) navigate("Home");
    hide_loader();
  }

  return (
    <View className="flex-1 items-center space-y-10 justify-center bg-primary">
      <View className="w-full items-center">
        <Input
          placeholder="E-MAIL"
          onChange={set_email}
          value={email}
        />
        <Separator />
        <Input
          placeholder="SENHA"
          onChange={set_password}
          value={password}
          password={true}
        />
      </View>
      <View className="w-4/5 flex-row justify-between">
        <Button onClick={login} text="ENTRAR" variant="colored" />
        <Button onClick={() => navigate("Cadastro")} text="CADASTRO" />
      </View>
    </View>
  );
}

export default SignIn;
