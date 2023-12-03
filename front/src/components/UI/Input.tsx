import { useState, useEffect } from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  View,
} from "react-native";

interface InputProps {
  onChange: (text: string) => void;
  value: string;
  password?: boolean;
  placeholder: string;
  error?: { status: boolean; message?: string };
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

function Input({
  onChange,
  value,
  password,
  placeholder,
  error,
  onFocus,
}: InputProps) {
  const [borderColor, setBorderColor] = useState("secondary");

  useEffect(() => {
    if (error?.status) setBorderColor("red-500");
    else setBorderColor("secondary");
  }, [error]);

  return (
    <>
      <TextInput
        className={`w-4/5 py-2 pl-4 border-2 rounded-md border-${borderColor} focus:border-green-300 text-secondary`}
        placeholderTextColor="#fffbeb"
        onChangeText={onChange}
        value={value}
        secureTextEntry={password}
        placeholder={placeholder}
        onFocus={onFocus}
      />
      <View>{error?.message}</View>
    </>
  );
}

export default Input;
