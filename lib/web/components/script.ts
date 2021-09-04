import { WebFunctionComponent } from '../types/components';

export type WebScriptProps = {
  id: string;
};

export const WebScript: WebFunctionComponent<WebScriptProps> = () => {
  return /* html */ `
    <script>
      window.ReactNativeOpenlayers = {
        ol: window.ol,
        postMessage: (message) => {
          window.ReactNativeWebView.postMessage(JSON.stringify(message));
        }
      }
    </script>
  `;
};
