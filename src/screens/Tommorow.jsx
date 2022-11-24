import React from "react";
import { Text, View } from "react-native";

const Tommorow = () => {
  return (
    <View className="flex-1 items-center justify-center  bg-[#E5E5E5] dark:bg-gray-900 ">
      <Text
        className="text-xl dark:text-white"
        style={{ fontFamily: "OpenSans-SemiBold" }}
      >
        This is the Tommorow
      </Text>
    </View>
  );
};

export default Tommorow;
