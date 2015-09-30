import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  length: DS.attr(),
  elevation: DS.attr(),
  notes: DS.attr(),
  image: DS.attr()
});
