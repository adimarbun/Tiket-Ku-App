import React, { Component } from 'react';
import { 
  Text,
  View, 
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput
  } from 'react-native';



import Logo from '../components/Logo'

export default class Login extends Component {
    render(){
        return(
            <View style={Styles.container}>
                <Logo/>
                <View style={Styles.container}>
                <TextInput style={Styles.inputBox}
                 underlineColorAndroid='rgba(0,0,0,0)' 
                 placeholder ="Email"
                 />
                <TextInput style={Styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder ="Password"
                secureTextEntry={true}
                />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Timeline')} style={Styles.button}>
                    <Text style ={Styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
                <View style={Styles.signupText}>
                    <Text>Belum Mempunyai akun? </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')} >
                        <Text style={Styles.signupButton}>Daftar</Text>
                    </TouchableOpacity>                  
                </View>
            </View>
        )
    }   
}
const Styles =StyleSheet.create({
    container:{
      backgroundColor:'#A9A9A9',
      flexGrow: 1,
      alignItems:'center',
      justifyContent:'center'
    },
    signupText:{
        flexGrow: 1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    signupButton:{
        
        color:'blue',
        fontWeight:'500'
    },
    inputBox:{
        width:300,
        backgroundColor:'rgba(255,255,255,200)',
        borderRadius: 10,
        marginVertical:10

    },
    button:{
        width:300,
        backgroundColor:'rgba(255,255,255,200)',
        borderRadius: 20,
        marginVertical:10

    },
    buttonText:{
        fontSize: 15,
        fontWeight:'500',
        color:'black',
        textAlign:'center',
        margin: 12
        
    }

  });
  