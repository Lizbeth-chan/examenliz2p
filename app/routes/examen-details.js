import Ember from 'ember';

export default Ember.Route.extend({
  models(){
    this.store.createRecord('question');
  }
});
