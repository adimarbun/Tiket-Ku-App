import React, {Component} from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  View,
  Right,
} from 'native-base';
import Navbar from '../components/Navbar';
import MenuBottom from '../components/menuBottom';
import Axios from 'axios';

export default class CategoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: [],
    };
  }

  componentDidMount() {
    const {params} = this.props.navigation.state;
    console.log(params.categoryId);
    Axios.get(
      `http://192.168.43.163:5000/api/v1/category/${params.categoryId}/events`,
    ).then(res => {
      this.setState({event: res.data});
      console.log(res.data);
    });
  }

  render() {
    const {params} = this.props.navigation.state;
    console.log(this.state.event);
    return (
      <Container>
        <Button danger style={{justifyContent: 'center'}}>
          <Text>{params.categoryName}</Text>
        </Button>

        <View style={{flex: 1}}>
          <Content>
            <FlatList
              data={this.state.event}
              renderItem={({item}) => (
                <Card style={{flex: 0}}>
                  <CardItem>
                    <Left>
                      <Thumbnail
                        source={{
                          uri:
                            'https://cdn0-production-images-kly.akamaized.net/ZD9wS9wVOb9acIexj8uhwznx0Hg=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3010167/original/078072700_1577850574-2.jpg',
                        }}
                      />
                      <Body>
                        <Text>{item.title.substring(0, 15) + '...'}</Text>
                        <Text>{item.startTime.slice(0, 10)}</Text>
                      </Body>
                    </Left>
                    <Right>
                      <TouchableOpacity onPress={() => alert('you liked')}>
                        <Image
                          style={Styles.iconmenu}
                          source={require('../icon/like.png')}></Image>
                      </TouchableOpacity>
                    </Right>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Image
                        source={{
                          uri: `${item.img}`,
                        }}
                        style={{height: 200, width: '100%', flex: 1}}
                      />
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('EventDetail', {
                            events: item.id,
                          })
                        }>
                        <Text>
                          {' '}
                          {item.description.substring(0, 100) + '...'}
                        </Text>
                      </TouchableOpacity>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button danger>
                        <Icon name="paper" />
                        <Text>Rp.{item.price}</Text>
                      </Button>
                    </Left>
                  </CardItem>
                </Card>
              )}
            />
          </Content>
        </View>
      </Container>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  iconpost: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  iconmenu: {
    width: 30,
    height: 30,
  },
});
