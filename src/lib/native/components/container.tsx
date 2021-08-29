import React, { FunctionComponent } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { WebView } from 'react-native-webview';

import { renderSource, SourceConfig } from '../../web/map';

export type ContainerProps = {
  sourceConfig?: SourceConfig;
  containerStyle?: ViewStyle;
};

export const Container: FunctionComponent<ContainerProps> = (props) => {
  return (
    <View style={StyleSheet.flatten([styles.container, props.containerStyle])}>
      <WebView source={renderSource(props.sourceConfig)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
