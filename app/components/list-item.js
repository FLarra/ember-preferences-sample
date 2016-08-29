import Ember from 'ember';

export default Ember.Component.extend({
  measure: Ember.inject.service(),
  bytes: 0,

  actions: {
    updateInput(input) {
      this.set('text_compressible', input);

      this.send('size', input);
    },

    toggleSwitch(){
      this.toggleProperty('active');
      this.send('updateInput', this.get('text_compressible'));
    },

    size(data) {
      if(this.get('active') && data) {
        this.set('preferences.text_compressed', data);
      } else {
        localStorage.removeItem('ember-preferences-app:text_compressed');
      }

      let measure = this.get('measure');
      let stored = localStorage.getItem('ember-preferences-app:text_compressed');

      this.set('bytes', measure.size(stored) || measure.size(data));
    },
  },
});
