import React, {Component} from 'react';
import {
  Text,
  View,
  Platform,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default class Profil extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <ScrollView style={{flex: 1}}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}></View>
            </View>
            <View>
              <ImageBackground
                source={require('../images/bali.jpg')}
                style={{
                  height: 200,
                  backgroundColor: 'yellow',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <View>
                  <Image
                    style={{width: 150, height: 140}}
                    source={{
                      uri:
                        'https://cdn0-production-images-kly.akamaized.net/ZD9wS9wVOb9acIexj8uhwznx0Hg=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3010167/original/078072700_1577850574-2.jpg',
                    }}></Image>
                </View>
              </ImageBackground>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{alignItems: 'center', marginVertical: 5, width: 320}}>
                <Text>Lucinta Lana</Text>
                <Text>Jakarta,Indonesia</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity style={{backgroundColor: '#D2B48C'}}>
                  <Text style={{margin: 3}}>Edit Profil</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{height: 50, flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#D2B48C',
                }}>
                <Image
                  style={Styles.iconmenu}
                  source={require('../icon/box.png')}></Image>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={Styles.iconmenu}
                  source={require('../icon/star.png')}></Image>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconpost: {
    width: 35,
    height: 35,
    marginLeft: 10,
  },
  iconmenu: {
    width: 30,
    height: 30,
  },
});
