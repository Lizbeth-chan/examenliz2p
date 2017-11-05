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
    Ember.RSVP.all( this.get('test.questions.option').invoke('save') ).then(()=>{
        alert('Ya se guardo');
      this.sendAction('guardar');
      })
    });
  },
  actions: {
		  borrarPregunta(){
			this.get('question').deleteRecord();
    },
      respuestaCorrecta(resp){
        switch(resp){
        case 1:
        this.set('model.option.op1', true);
        this.set('model.option.op2', false);
        this.set('model.option.op3', false);
        this.set('model.option.op4', false);
        break;
        case 2:
        this.set('model.option.op1', false);
        this.set('model.option.op2', true);
        this.set('model.option.op3', false);
        this.set('model.option.op4', false);
        break;
        case 3:
        this.set('model.option.op1', false);
        this.set('model.option.op2', false);
        this.set('model.option.op3', true);
        this.set('model.option.op4', false);
        break;
        case 4:
        this.set('model.option.op1', false);
        this.set('model.option.op2', false);
        this.set('model.option.op3', false);
        this.set('model.option.op4', true);
        break;
    }

      },

		}
});
