import React from "react";
import { Text, View, FlatList } from "react-native";
import AddtaskButton from "../components/AddtaskButton";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import TaskCard from "../components/TaskCard";

const Home = () => {
  const navigation = useNavigation();
  const tasks = useSelector((state) => state.task);

  return (
    <View className="flex-1 items-center justify-center  bg-[#E5E5E5] dark:bg-gray-900 ">
      <View className="flex-1 justify-center">
        <FlatList
          data={tasks}
          renderItem={({item}) => <TaskCard item={item} />}
        />
      </View>
      
      <AddtaskButton
        title={"Add a new task"}
        onPress={() => navigation.navigate("NewTask")}
      />
    </View>
  );
};

export default Home;
