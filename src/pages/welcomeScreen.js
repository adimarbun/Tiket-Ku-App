import React, {Component} from 'react';
import {Text, Image, ImageBackground, View, Button} from 'react-native';

import Navbar from '../components/Navbar';
import {Container, Content, Card, CardItem} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

class WelcomeScreen extends Component {
  render() {
    return (
      <Container>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={{
            uri:
              'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2019/08/28/956838019.jpg',
          }}>
          <View
            style={{
              display: 'flex',
              marginTop: 200,
              justifyContent: 'flex-end',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 50}}>TIKET-KU </Text>
            <Text style={{fontSize: 20, color: 'red', fontWeight: 'bold'}}>
              Welcome to Tiket-Ku
            </Text>
            <Text style={{fontSize: 20, color: 'red', fontWeight: 'bold'}}>
              Booking Your Ticket Now
            </Text>
            <View style={{fontSize: 20, marginTop: 100, color: 'red'}}>
              <Button
                onPress={() => this.props.navigation.navigate('Dashboard')}
                title="Skip >"
                color="red"
              />
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default WelcomeScreen;
