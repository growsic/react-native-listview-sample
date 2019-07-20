import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import TextSection from './TextSection'

export default class SampleListView extends Component {
  render() {
    return (
      <ScrollView style={styles.viewStyle}>
        <TextSection>こんなテキストを</TextSection>
        <TextSection>表示して</TextSection>
        <TextSection>スクロールもできる</TextSection>
        <TextSection>サンプルを</TextSection>
        <TextSection>環境構築から</TextSection>
        <TextSection>作成まで</TextSection>
        <TextSection>１時間で</TextSection>
        <TextSection>できる！</TextSection>
        <TextSection>こんなテキストを</TextSection>
        <TextSection>表示して</TextSection>
        <TextSection>スクロールもできる</TextSection>
        <TextSection>サンプルを</TextSection>
        <TextSection>環境構築から</TextSection>
        <TextSection>作成まで</TextSection>
        <TextSection>１時間で</TextSection>
        <TextSection>できる！</TextSection>
      </ScrollView>
    );
  }
}

const styles = {
  viewStyle: {
      paddingTop: 100
  },
}