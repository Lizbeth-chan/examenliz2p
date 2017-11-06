import Ember from 'ember';

export default Ember.Controller.extend({
      // filtro: Ember.computed.filter('model', function(item, index){
      //   return item.get(´'questions.options') == true;
      // })
      actions:{
        borrarExamen(test){
          test.destroyRecord();
        },
      }



});
