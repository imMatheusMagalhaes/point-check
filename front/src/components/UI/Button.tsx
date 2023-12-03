import { Text, TouchableOpacity, GestureResponderEvent } from "react-native";

interface ButtonProps {
  text: string;
  onClick: (event: GestureResponderEvent) => void;
  variant?: "colored";
}

function Button({ onClick, text, variant }: ButtonProps) {
  let bgColor = "bg-secondary";
  let textColor = "text-primary";
  let hoverColor = "bg-secondary-light";
  if (variant !== "colored") {
    bgColor = "border-2 border-secondary";
    textColor = "text-secondary";
    hoverColor = "bg-secondary-light";
  }
  return (
    <TouchableOpacity
      className={`w-2/5 py-2 rounded-md ${bgColor} hover`}
      onPress={onClick}
    >
      <Text className={`text-center ${textColor}`}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
