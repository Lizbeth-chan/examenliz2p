import Ember from 'ember';

export default Ember.Component.extend({
  store. Ember.inject.service('store'),
savedetails(){
  let opcion = this.get('store').createRecord('question', {
    pregunta: this.get('question'),
  });
},
});
