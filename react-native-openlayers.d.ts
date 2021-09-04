import ol from 'ol';
import layer from 'ol/layer';
import proj from 'ol/proj';
import source from 'ol/source';

declare global {
  interface Window {
    ol: typeof ol & {
      proj: typeof proj;
      layer: typeof layer;
      source: typeof source;
    };
  }
}
