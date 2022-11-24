import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import StackNav from "./StackNav";

export default function RootNavigator() {
  return (
    <View className="h-screen bg-[#E5E5E5] dark:bg-gray-900" >
    <NavigationContainer >
      <StackNav />
    </NavigationContainer>
    </View>
  );
}
