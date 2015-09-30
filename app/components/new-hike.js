import Ember from 'ember';

export default Ember.Component.extend({
  addNewHike: false,
  actions: {
    hikeFormShow() {
      this.set('addNewHike', true);
    },

  save1() {
    var params = {
      name: this.get('name'),
      location: this.get('location'),
      length: this.get('length'),
      elevation: this.get('elevation'),
      notes: this.get('notes'),
      image: this.get('image'),
    };
    this.set('addNewHike', false),
    this.sendAction('save2', params);
    }
  }
});
