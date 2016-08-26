import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    asd() {
      this.toggleProperty('leftSideBarOpen');
      if (this.get('leftSideBarOpen')) {
        this.set('keepOpened',true);
      }
    },
    asdf() {
      this.toggleProperty('leftSideBarOpen');
      this.set('keepOpened',false);
    }
  }
});
