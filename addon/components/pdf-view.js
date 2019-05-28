import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';
// import layout from '../templates/components/pdf-view';

export default Component.extend({
  // layout,
  tagName: 'iframe',
  elementId: 'ember-pdfjs-viewer',
  attributeBindings: ['src'],
  filePath: '/ember-pdfjs-wrapper/pdfjs/web/compressed.tracemonkey-pldi-09.pdf',
  src: computed('filepath', {
    get(key) {
      return `/ember-pdfjs-wrapper/pdfjs/web/viewer.html?file=${this.filePath}`;
    },
    set(key, value) {
      return value;
    }
  }),
});
