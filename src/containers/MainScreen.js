/*
Name : Parshant Nagpal
File Name : MainScreen.js
Description : Contains the main page of the app wich contains driver and customer
Date : 6 Sept 2018
*/

import React , { Component } from 'react';
import {View} from 'react-native';
import Styles from '../styles';
import Button from '../components/common/Button'

class MainScreen extends Component {
    constructor(props){
        super(props);
        this.pushTo= this.pushTo.bind(this);
    }
    /*
    pushed to next Screen bvased on condition
    */
    pushTo(value){
        if(value == 'Customer'){
           this.props.navigator.push({
            screen : 'LoginScreen'
           }) 

        }
    }

    render(){
        return(
            <View style={Styles.mainScreenContainer}>
                <View style={Styles.mainScreenSubContainer}>
                    <Button textStyle={Styles.mainScreenTextStyle} buttonStyle={Styles.mainScreenButtonStyle} buttonName = {'Driver'} onPress={()=>this.pushTo('Driver')} />
                </View>
                <View style={Styles.mainScreenSubContainer}>
                    <Button textStyle={Styles.mainScreenTextStyle} buttonStyle={Styles.mainScreenButtonStyle} buttonName = {'Customer'} onPress={()=>this.pushTo('Customer')}  />
                </View>
            </View>
        );
    }
}
export default MainScreen;






