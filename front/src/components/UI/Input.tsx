import { useState } from "react";
import { TextInput } from "react-native";

interface InputProps {
  onChange: (text: string) => void;
  value: string;
  password?: boolean;
  placeholder: string;
}

function Input({
  onChange,
  value,
  password,
  placeholder,
}: InputProps) {
  const [borderColor, setBorderColor] = useState("secondary");
  return (
    <TextInput
      className={`w-4/5 py-2 pl-4 border-2 rounded-md border-${borderColor} focus:border-green-300 text-secondary`}
      placeholderTextColor="#fffbeb"
      onChangeText={onChange}
      value={value}
      secureTextEntry={password}
      placeholder={placeholder}
    />
  );
}

export default Input;
