import { dependencies } from '../../../package.json';
import { WebFunctionComponent } from '../types/components';
import { WebScript } from './script';
import { WebStyle } from './style';

export type WebSourceProps = {
  id: string;
};

export const WebSource: WebFunctionComponent<WebSourceProps> = (props) => {
  const version = `v${dependencies.ol.substring(1)}`;

  return /* html */ `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/${version}/css/ol.css">
        ${WebStyle({ id: props.id })}
      </head>
      <body>
        <div id="${props.id}"></div>
        <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/${version}/build/ol.js"></script>
        ${WebScript({ id: props.id })}
      </body>
    </html>
  `;
};
