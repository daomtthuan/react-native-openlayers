import React, { FunctionComponent } from 'react';
import { AppRegistry } from 'react-native';

import { name } from './app.json';
import { ReactNativeOpenlayers } from './lib';

export type AppProps = {};

export const App: FunctionComponent<AppProps> = () => {
  return <ReactNativeOpenlayers />;
};

AppRegistry.registerComponent(name, () => App);
