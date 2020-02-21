import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';
// import layout from '../templates/components/pdf-view';

export default Component.extend({
  // layout,
  tagName: 'iframe',
  elementId: 'ember-pdfjs-viewer',
  attributeBindings: ['src'],
  filePath: '/ember-pdfjs-wrapper/pdfjs/web/compressed.tracemonkey-pldi-09.pdf',

  viewerUri: computed('prefix', function () {
    const uri = '/ember-pdfjs-wrapper/pdfjs/web/viewer.html';
    return this.prefix ? this.prefix + uri : uri;
  }),
  src: computed('filePath', 'viewerUri', {
    get(key) {
      return this.viewerUri + `?file=${encodeURIComponent(this.filePath)}`;
    },
    set(key, value) {
      return value;
    }
  }),
});
