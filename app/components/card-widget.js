import Ember from 'ember';
import preference from 'ember-preferences/computed';

const $sky_blue = 'rgba(63, 81, 181,0.3)';
const $white = '#FFFFFF';


export default Ember.Component.extend({
  attributeBindings: ['backgroundColor'],
  backgroundColor: Ember.computed('persistActive', 'persistence', function() {
    return (this.get('persistActive') && this.get('persistence')) ? $sky_blue : $white;
  }),
  persistActive: preference('active'),
  backgroundColorChanged: Ember.observer('backgroundColor', function() {
    this.setBackgroundColor();
  }),

  actions: {
    hide(time) {
      alert('Will set expire time to' + time + ' seconds');
    },

    toggle(){
      let active = this.toggleProperty('active');

      this.set('preferences.active', active); // updates local storage
      this.set('backgroundColor',  active ? $sky_blue : $white);
    },

    awesomeButton() {
      this.set('preferences.foo', 'els');
    },
  },

  didInsertElement() {
    this.setBackgroundColor();
  },

  setBackgroundColor() {
    this.$().children().css('background-color', this.get('backgroundColor'));
  },
});
