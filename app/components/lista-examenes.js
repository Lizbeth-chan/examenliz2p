import Ember from 'ember';

export default Ember.Component.extend({
  store. Ember.inject.service('store'),
  save(){
    let test= this.get('test');

    if(Ember.isBlank(test.get('nombre'))){
      alert('No puede quedarse sin nombre');
      return;
    }

    test.save().then(()=>{
    Ember.RSVP.all( this.get('test.questions').invoke('save') ).then(()=>{
        alert('Ya se guardo');
      this.sendAction('didSave');
      })
    });
  },
  saveExamen(){
    let examenes = this.get('store').createRecord('test', {
      test: this.get('test'),
    });
  },
    borrar(){
      this.get('model').destroyRecord();
      return this.transitionToRoute('lista-examenes');
    }

});
