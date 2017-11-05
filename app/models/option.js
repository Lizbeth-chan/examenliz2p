import DS from 'ember-data';

export default DS.Model.extend({
    nombre: DS.attr('string'),
    op1: false,
    op2: false,
    op3: false,
    op4: false,
    question: DS.belongsTo('question')

});
