import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(hike) {
      if(confirm('Sure?')) {
        this.sendAction('destroyHike', hike);
      }
    }
  }
});
