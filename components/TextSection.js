import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class TextSection extends Component {
  render() {
    return (
    <View style={{
        borderColor: '#ddd',
        borderBottomWidth:1,
        padding: 10}}
    >
        <Text>{this.props.children}</Text>
    </View>
    );
  }
}