/*
Name : Parshant Nagpal
File Name : Maps.js
Description : Contains the Maps Tab
Date : 6 Sept 2018
*/

import React, { Component } from "react";
// import { View } from "react-native";
import LoginScreen from "./LoginScreen";
import { connect } from "react-redux";
// import Styles from "../styles";
import * as appAction from "../actions";

class AppContainer extends Component {
  componentDidMount() {
    // console.log("this.props", this.props);
    this.props.dispatch(appAction.setNavigator(this.props.navigator));
  }
  componentWillUnmount() {
    // console.log("componentWillUnmount", this.props);
  }
  render() {
    return <LoginScreen />;
  }
}
export default connect(
  null,
  null
)(AppContainer);
