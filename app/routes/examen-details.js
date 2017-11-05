import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let id = params.event;
    return this.store.find('test', id);
  },
  actions:{
    borrar(texto, code, test){
      alert('Borrando')
    }
  }
});
