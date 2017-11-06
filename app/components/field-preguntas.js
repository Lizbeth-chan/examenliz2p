import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  save(){
    let question= this.get('question');

    if(Ember.isBlank(question.get('nombre'))){
      alert('El campo no puede estar vacio');
      return;
    }

    question.save().then(()=>{
    Ember.RSVP.all( this.get('question.options').invoke('save') ).then(()=>{
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
