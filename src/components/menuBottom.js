import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  View,
} from 'native-base';

import {createBottomTabNavigator} from 'react-navigation';

export default class MenuBottom extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={{backgroundColor: 'red'}}>
          <Button vertical>
            <Icon name="apps" />
            <Text>Apps</Text>
          </Button>
          <Button vertical>
            <Icon name="film" />
            <Text>MyTicket</Text>
          </Button>
          <Button vertical>
            <Icon name="navigate" />
            <Text>Payment</Text>
          </Button>
          <Button vertical>
            <Icon name="person" />
            <Text>Profil</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
