import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View, TextInput, SafeAreaView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import {Actions } from 'react-native-router-flux';



export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombre:'Juan',
            pass:'pass123',
            nombreInput: '',
            passInput:''
        }
    }

    validar = () => {
        if( (this.state.nombreInput == this.state.nombre) && (this.state.passInput == this.state.pass)){
            Actions.home()
        }else{
            Alert.alert('Usuario o constraseña incorrecto')
        }
    }

    
    render(){
        return(
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
                <View style={styles.containerView}>
                    <SafeAreaView>
                        <Image style={styles.imagenUser} source={require('../assets/login-user.png')}></Image>
                        <Text>Nombre de usuario:</Text>
                        <View>
                            <TextInput onChangeText={(text) => { this.setState({nombreInput: text}) }} style={styles.input} placeholder="Usuario" keyboardType="default"/>
                        </View>
                        <Text>Contraseña:</Text>
                        <TextInput onChangeText={(text) => { this.setState({passInput: text})}} style={styles.input} placeholder="Contraseña" keyboardType="default"/>
                    </SafeAreaView>
                    <TouchableOpacity style={styles.button} onPress={() => {this.validar()}}>
                        <Text style={styles.textoWhite}>Ingresar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    containerUser:{
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
