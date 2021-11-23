import React, {Component} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from "react-native-router-flux";

export default class Home extends Component {

    goLogin = () => {
        Actions.login()
    }
    
    render(){
        return (
            <View style={styles.container}>
                <Text>Bienvenido!</Text>
                <TouchableOpacity style={styles.button} onPress={this.goLogin}>
                    <Text>Iniciar sesión</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        padding:10
    },
    button:{
        alignItems:"center",
        backgroundColor:"#FF8888",
        padding:10
    }
});