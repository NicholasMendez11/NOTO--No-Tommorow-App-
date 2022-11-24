import { View, Pressable } from "react-native";
import { useColorScheme } from "nativewind";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const CustomHeader = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className="flex flex-row w-screen justify-between  bg-[#E5E5E5] dark:bg-gray-900">
      <Pressable onPress={toggleColorScheme} className="ml-6 mt-8 mb-3">
        <Ionicons
          name="moon"
          size={30}
          color={colorScheme == "dark" ? "white" : "black"}
        />
      </Pressable>
      <Pressable className="mr-6 mt-8 mb-3">
        <FontAwesome5
          name="donate"
          size={30}
          color={colorScheme == "dark" ? "white" : "black"}
        />
      </Pressable>
    </View>
  );
};

export default CustomHeader;
