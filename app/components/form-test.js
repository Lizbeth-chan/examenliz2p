import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  save(){
    let test= this.get('test');

    if(Ember.isBlank(test.get('nombre'))){
      alert('El campo no puede estar vacio');
      return;
    }

    test.save().then(()=>{
    Ember.RSVP.all( this.get('test.questions').invoke('save') ).then(()=>{
        alert('Ya se guardo');
      this.sendAction('guardar');
      })
    });
  },
  actions:{
    crearPregunta(){
      let question = this.get('store').createRecord('question', {
        test: this.get('test'),
      });
    },

  }



});
