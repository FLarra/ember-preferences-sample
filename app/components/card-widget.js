import Ember from 'ember';
import preference from 'ember-preferences/computed';

const $sky_blue = 'rgba(63, 81, 181,0.3)';
const $white = '#FFFFFF';


export default Ember.Component.extend({
  attributeBindings: ['backgroundColor'],
  classNameBindings: ['hide'],
  title: preference('cardTitle'),
  subtitle: preference('cartSubTitle'),

  backgroundColor: Ember.computed('persistActive', 'persistence', function() {
    return (this.get('persistActive') && this.get('persistence')) ? $sky_blue : $white;
  }),
  backgroundColorChanged: Ember.observer('backgroundColor', function() {
    this.setBackgroundColor();
  }),

  persistActive: preference('active'),
  propExpirable10: preference('propExpirable10', { expires() { return +new Date() + 1000 * 10; } }),
  propExpirable120: preference('propExpirable120', { expires() { return +new Date() + 1000 * 120; } }),
  hide: Ember.computed('propExpirable10', 'propExpirable120', function() {
    if (this.get('expiration')) {
      return (this.get('propExpirable10') || this.get('propExpirable120')) ? true : false;
    }
  }),



  actions: {
    hideCard(time) {
      this.set(`propExpirable${time}`, `Semi persistent var for ${time} secs`);
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
    if (this.get('default')) {
      this.set('headline', this.get('title'));
      this.set('subhead', this.get('subtitle'));
    }
  },

  setBackgroundColor() {
    this.$().children().css('background-color', this.get('backgroundColor'));
  },
});
