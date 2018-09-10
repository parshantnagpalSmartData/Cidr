
/*
Name : Parshant Nagpal
File Name : navigators.js
Description : function loads initial screen and for reseting the another screens 
Date : 6 Sept 2018
*/
import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Constants from '../constants'
const tabs = [
    {
      label: 'DashBoard',
      screen: 'DashBoard',
      icon: Constants.Images.tabIcon.tab1,
      title: "Navigation Types"
    },
    {
      label: "Maps",
      screen: "Maps",
      icon: Constants.Images.tabIcon.tab2,
      title: "Maps"
    }
  ];
  
export default (root) =>{
    console.log(root, "rootrootroot");
    switch (root) {
      case "loader":
      Navigation.startSingleScreenApp({
        screen: {
          screen: "Loader",
          title: "Login",
          navigatorStyle: {}
        },
        appStyle: {
          navBarHidden: true
        }
      });

      return;
      case "login":
        Navigation.startSingleScreenApp({
          screen: {
            screen: "LoginScreen",
            title: "Login",
            navigatorStyle: {}
          },
          appStyle: {
            navBarHidden: true
          }
        });

        return;
     case "MainScreen":
        Navigation.startSingleScreenApp({
          screen: {
            screen: "MainScreen",
            title: "MainScreen",
            navigatorStyle: {}
          },
          appStyle: {
            navBarHidden: true
          }
        });

        return;
      case "after-login":
        Navigation.startTabBasedApp({
          tabs,
          animationType: Platform.OS === "ios" ? "slide-down" : "fade",
          tabsStyle: {
            tabBarBackgroundColor: "#003a66",
            tabBarButtonColor: "#ffffff",
            tabBarSelectedButtonColor: "#ff505c",
            tabFontFamily: "BioRhyme-Bold"
          },
          appStyle: {
            tabBarBackgroundColor: "#003a66",
            navBarButtonColor: "#ffffff",
            tabBarButtonColor: "#ffffff",
            navBarTextColor: "#ffffff",
            tabBarSelectedButtonColor: "#ff505c",
            navigationBarColor: "#003a66",
            navBarBackgroundColor: "#003a66",
            statusBarColor: "#002b4c",
            tabFontFamily: "BioRhyme-Bold"
          },
          drawer: {
            left: {
              screen: "SideMenu"
            }
          }
        });
        return;
      default:
        console.error("Unknown app root");
    }
  }
