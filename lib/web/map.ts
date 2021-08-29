export type SourceConfig = {
  id?: string;
  lang?: string;
  title?: string;
  version?: string;
};

export const renderSource = (config?: SourceConfig) => {
  const html = /* html */ `
    <!DOCTYPE html>
    <html lang="${config?.lang ?? 'en'}">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <title>
          ${config?.title ?? 'React Native Openlayers'}
        </title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/${config?.version ?? 'latest'}/css/ol.css">
        <style>
          * {
            padding: 0;
            margin: 0;
          }

          #${config?.id ?? 'react-native-openlayers'} {
            height: 100vh;
            width: 100vw;
          }
        </style>
      </head>
      <body>
        <div id="${config?.id ?? 'react-native-openlayers'}"></div>
        <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/${config?.version ?? 'latest'}/build/ol.js"></script>
        <script type="text/javascript">
          var map = new ol.Map({
            target: '${config?.id ?? 'react-native-openlayers'}',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              })
            ],
            view: new ol.View({
              center: ol.proj.fromLonLat([37.41, 8.82]),
              zoom: 4
            })
          });
        </script>
      </body>
    </html>
  `;

  return { html };
};
