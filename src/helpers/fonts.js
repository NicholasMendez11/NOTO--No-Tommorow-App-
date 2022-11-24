import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const [fontsLoaded] = useFonts({
    OpenSans: require("../../assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-bold": require("../../assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-SemiBold": require("../../assets/fonts/OpenSans-SemiBold.ttf"),
  });

  //Load fonts prior 
 export const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

   if (!fontsLoaded) {
     return null
   }


  