import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let examen = this.get('store').createRecord('test',{ });
    return examen;
  },
  
});
