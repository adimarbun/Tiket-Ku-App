import React, { Component } from 'react';
import { 
  Text,
  View, 
  StyleSheet
  } from 'react-native';

export default class Logo extends Component {
    render(){
        return(
            <View style ={Styles.container}>
                <Text style={Styles.logoText}>WISATA KITA</Text>
                <Text style={{color:'red'}}>explore Wisata Daerahmu</Text>
            </View>
            
        )
    }
} 

const Styles =StyleSheet.create({
    container:{
      flexGrow: 1,
      justifyContent:'flex-end',
      alignItems:'center'
      
    
    },
    logoText:{
        fontSize:30,
        color:'blue'
    }
  });
  