import React from 'react';
import {AppRegistry, View} from 'react-native';
import SampleListView from './components/sampleListView'

const App = () => (
    <SampleListView />
);

AppRegistry.registerComponent('sampleProject', () => App);
