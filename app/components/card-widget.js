import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['backgroundColor'],
  backgroundColor: '#FFFFFF',
  setBackgroundColor: function() {
    this.$().children().css('background-color', this.get('backgroundColor'))
  }.observes('backgroundColor'),

  actions: {
    hide(time) {
      alert('Will set expire time to' + time + ' seconds');
    },

    toggle(){
      this.toggleProperty('active');
      let color = this.get('active') ? 'rgba(63, 81, 181,0.3)' : '#FFFFFF';
      this.set('backgroundColor', color);
    },
  }
});
