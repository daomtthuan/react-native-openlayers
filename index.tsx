import 'react-native-webview';

import React, { FunctionComponent, useRef } from 'react';
import { AppRegistry, Button, StyleSheet, View } from 'react-native';

import { name } from './app.json';
import ReactNativeOpenlayers, { ReactNativeOpenlayersRef } from './lib';

export type AppProps = {};

export const App: FunctionComponent<AppProps> = () => {
  const reactNativeOpenlayers = useRef<ReactNativeOpenlayersRef>(null);

  const renderMap = () => {
    const map = new window.ol.Map({
      target: 'map',
      layers: [],
      view: new window.ol.View({
        center: window.ol.proj.fromLonLat([37.41, 8.82]),
        zoom: 4,
      }),
    });

    return map;
  };

  const setMap = () => {
    reactNativeOpenlayers.current?.postAction((map) => {
      map.addLayer(
        new window.ol.layer.Tile({
          source: new window.ol.source.OSM(),
        }),
      );
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Action" onPress={setMap} />
      <ReactNativeOpenlayers ref={reactNativeOpenlayers} id="map" render={renderMap} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent(name, () => App);
