import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
export default class Navbar extends Component {
  render() {
    return (
      <Header style={{backgroundColor: '#CD5C5C'}}>
        <Left>
          <Button transparent>
            <Icon name="film" />
            <Text>Back</Text>
          </Button>
        </Left>
        <Body>
          <Title>Tiket-Ku</Title>
        </Body>
      </Header>
    );
  }
}
