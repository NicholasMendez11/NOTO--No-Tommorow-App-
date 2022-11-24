import { StatusBar } from "expo-status-bar";
import react, { useCallback } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { useColorScheme } from "nativewind";
import CustomHeader from "./src/components/CustomHeader";
import RootNavigator from "./src/navigations/RootNavigator";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { default as theme } from "./src/constants/custom-theme.json";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import { store } from "./src/redux/app/store";
SplashScreen.preventAutoHideAsync();

export default function App() {
  const { colorScheme } = useColorScheme();

  //Fonts
  const [fontsLoaded] = useFonts({
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  //End fonts
  const evaTheme = colorScheme === "dark" ? eva.dark : eva.light;

  return (
    <Provider store={store}>
      <View onLayout={onLayoutRootView}>
        <ApplicationProvider {...eva} theme={{ ...evaTheme, ...theme }}>
          <RootNavigator />
          <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
        </ApplicationProvider>
      </View>
    </Provider>
  );
}
