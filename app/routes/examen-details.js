import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.find('test', params.id);
  },
  actions:{
    borrar(texto, code, test){
      alert('Borrando')
    }
  }
});
