import { WebFunctionComponent } from '../types/components';

export type WebStyleProps = {
  id: string;
};

export const WebStyle: WebFunctionComponent<WebStyleProps> = (props) => {
  return /* html */ `
    <style>
      * {
        padding: 0;
        margin: 0;
      }

      #${props.id} {
        height: 100vh;
        width: 100vw;
      }
    </style>
  `;
};
