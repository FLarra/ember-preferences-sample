import Ember from 'ember';

export default Ember.Component.extend({
  measure: Ember.inject.service(),
  bytes: 0,

  actions: {
    updateInput(input) {
      this.set('text', input);

      this.send('size', input);
    },

    size(data) {
      if(this.get('active')) {
        // will calculate compressed value size
      } else {
        this.set('bytes', this.get('measure').size(data));
      }
    },
  },
});
