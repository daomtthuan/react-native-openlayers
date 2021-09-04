import { Map } from 'ol';
import React, { forwardRef, ForwardRefExoticComponent, useImperativeHandle, useRef } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { WebView } from 'react-native-webview';

import { WebSource } from '../../web/components/source';
import { Message, PostMessage } from '../types/webview';

export type NativeContainerProps = {
  id: string;
  render: (postMessage: PostMessage) => Map;
  onMessage: (message: Message) => void;
  containerStyle?: ViewStyle;
};

export type NativeContainerRef = {
  postAction: (action: (map: Map, postMessage: PostMessage) => void) => void;
};

export const NativeContainer: ForwardRefExoticComponent<NativeContainerProps & React.RefAttributes<NativeContainerRef>> = forwardRef((props, ref) => {
  const webview = useRef<WebView>(null);

  // props.render to string -> function () {...} -> use it with params (function() {...})(...) at Web platform
  const injectedRenderMapScript = /* javascript */ `
    window.ReactNativeOpenlayers.map = (${props.render.toString()})((message) => window.ReactNativeOpenlayers.postMessage(message));
  `;

  console.log(injectedRenderMapScript);

  useImperativeHandle(ref, () => ({
    postAction: (action) => {
      // action to string -> function () {...} -> use it with params (function() {...})(...) at Web platform
      webview.current?.injectJavaScript(/* javascript */ `
        (${action.toString()})(window.ReactNativeOpenlayers.map, (message) => window.ReactNativeOpenlayers.postMessage(message));
      `);
    },
  }));

  return (
    <View style={StyleSheet.flatten([styles.container, props.containerStyle])}>
      <WebView
        ref={webview}
        source={{
          html: WebSource({ id: props.id }),
        }}
        onMessage={(event) => props.onMessage(JSON.parse(event.nativeEvent.data) as Message)}
        injectedJavaScript={injectedRenderMapScript}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
