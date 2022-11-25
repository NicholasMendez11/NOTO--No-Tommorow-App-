import React from "react";
import { Text, View, Ra } from "react-native";
import { CheckBox } from "@ui-kitten/components";
const TaskCard = ({ item }) => {
  const [select, setSelected] = React.useState(false);
  return (
    <View className=" flex-row justify-start m-5">
      <View className=" mr-5 "></View>
      <View className="flex">
        <Text
          onPress={() => setSelected(!select)}
          className={
            select
              ? " text-xl  text-gray-600 dark:text-gray-400 line-through"
              : " text-xl  dark:text-white"
          }
          style={{ fontFamily: "OpenSans-SemiBold" }}
        >
          {item.title}
        </Text>
      </View>
    </View>
  );
};

export default TaskCard;
