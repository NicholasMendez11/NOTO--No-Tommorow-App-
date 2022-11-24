import { createStackNavigator } from "@react-navigation/stack";
import TopNavigator from "./TopNavigator";
import CustomHeader from "../components/CustomHeader";
import NewTask from "../screens/NewTask";
const Stack = createStackNavigator();
const StackNav = () => {
  const config = {
    general: {
      presentation: "modal",
      header: ({ navigation, route, options, back }) => <CustomHeader />,
    },
    newTaskoptions: {
      headerShown: false,
    },
  };

  return (
    <Stack.Navigator screenOptions={config.general}>
      <Stack.Screen name="TopNavigator" component={TopNavigator} />
      <Stack.Screen
        name="NewTask"
        component={NewTask}
        options={config.newTaskoptions}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
