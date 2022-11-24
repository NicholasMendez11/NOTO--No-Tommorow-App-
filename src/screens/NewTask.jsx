import React,{useState} from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import AddtaskButton from "../components/AddtaskButton";
import { useNavigation } from "@react-navigation/native";
import TextEntry from "../components/TextEntry";
import { Ionicons } from "@expo/vector-icons";
import {useSelector, useDispatch} from "react-redux"
import {addTask} from '../redux/features/tasks/tasks'
const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [taskTitle,setTaskTitle] = useState("")
  const [taskDescription,setTaskDescription] = useState("")

  function addNewTask(){
    const newTask = {
      id:1,  
      title: taskTitle,
      description: taskDescription,
      date: "",
      location: "",
      priority: "",
      status: "pending",
    }
    dispatch(addTask(newTask))
    setTaskDescription("");
    setTaskTitle("");

  }

  return (
    <View className="flex-1 items-center justify-center  bg-[#E5E5E5] dark:bg-gray-900 ">
      <View className="flex-1 justify-start align-start w-screen p-5">
        <Text
          className=" text-xl  dark:text-white"
          style={{ fontFamily: "OpenSans-SemiBold" }}
        >
          Add Task
        </Text>
        <View className=" flex-1">
          <TextEntry
            style={styles.inputs}
            label={"Title"}
            placeholder={"Create a react app."}
            value={taskTitle}
            onChangeText={setTaskTitle}
          />
          <TextEntry
            style={styles.inputs}
            label={"Description"}
            placeholder={
              "I need to start the project early this week, so it can be completed by december..."
            }
            multiline
            value={taskDescription}
            onChangeText={setTaskDescription}
          />
          <View className=" flex-row  justify-around mt-5 pr-5">
            <Pressable android_ripple={{ color: "cyan" }}>
              <Ionicons name="md-timer" size={24} color="orange" />
            </Pressable>
            <Pressable>
              <Ionicons name="location" size={24} color="orange" />
            </Pressable>
            <Pressable>
              <Ionicons name="flag" size={24} color="orange" />
            </Pressable>
          </View>
        </View>
        <AddtaskButton title={"Create task"} onPress={addNewTask}/>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  inputs: {
    margin: 10,
    borderRadius: 10,
  },
});
