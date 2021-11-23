import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View, TextInput, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import {Actions } from 'react-native-router-flux';



export default class Login extends Component {
    constructor(props){
        super(props);
    }

    goHome = () => {
        Actions.home()
    }

    
    render(){
        return(
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
                <View style={styles.containerView}>
                    <SafeAreaView>
                        <Text>Nombre de usuario:</Text>
                        <View>
                            <Image style={styles.imagenUser} source={require('../assets/login-user.png')}></Image>
                            <TextInput style={styles.input} placeholder="Usuario" keyboardType="default"/>
                        </View>
                        <Text>Contraseña:</Text>
                        <TextInput style={styles.input} placeholder="Contraseña" keyboardType="default"/>
                    </SafeAreaView>
                    <TouchableOpacity style={styles.button} onPress={this.goHome}>
                        <Text style={styles.textoWhite}>Ingresar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    containerUser:{
        display:""
    },
    imagenUser:{
        width:50,
        height:50,
        alignSelf:"center",
        marginBottom:40
    },
    container:{
        flex:1,
        backgroundColor:"#FFFFFF"
    },
    containerView:{
        backgroundColor:"#FFFFFF",
        flex:1,
        margin:10,
        justifyContent:"center",
        padding:10,
    },
    button:{
        alignItems:"center",
        backgroundColor:"#006BE3",
        borderRadius:10,
        padding:10
    },
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
    },
    textoWhite:{
        color:"#FFFFFF"
    }
});
