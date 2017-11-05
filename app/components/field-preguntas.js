import Ember from 'ember';

export default Ember.Component.extend({
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
