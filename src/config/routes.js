import { Navigation, ScreenVisibilityListener } from "react-native-navigation";
// Registering Containers

import AppContainer from "../containers/AppContainer";
import LoginScreen from "../containers/LoginScreen";
import MainScreen from "../containers/MainScreen";
import DashBoard from "../containers/DashBoard";
import Maps from "../containers/Maps";
import Loader from "../containers/Loader";
// Registering Components
import SideMenu from "../components/SideMenu";

export function registerScreens(store, Provider) {
  Navigation.registerComponent("AppContainer", () => AppContainer, store, Provider);
  Navigation.registerComponent("LoginScreen", () => LoginScreen, store, Provider);
  Navigation.registerComponent("MainScreen", () => MainScreen, store, Provider);
  Navigation.registerComponent("DashBoard", () => DashBoard, store, Provider);
  Navigation.registerComponent("Maps", () => Maps, store, Provider);
  Navigation.registerComponent("Loader", () => Loader, store, Provider);
  Navigation.registerComponent("SideMenu", () => SideMenu, store, Provider);
}
/* eslint-disable */
export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({ screen }) => console.log(`Displaying screen ${screen}`),
    didAppear: ({ screen, startTime, endTime, commandType }) =>
      console.log("screenVisibility", `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({ screen }) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({ screen }) => console.log(`Screen disappeared ${screen}`)
  }).register();
}
/* eslint-disable */
