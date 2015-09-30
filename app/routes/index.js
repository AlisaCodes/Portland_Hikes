import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('hike');
  },

  actions: {
    save3(params) {
      var newHike = this.store.createRecord('hike', params);
      newHike.save();
      this.transitionTo('index');
    },
    
    destroyHike(hike) {
      hike.destroyRecord();
      this.transitionTo('index');
    }
  }
});
