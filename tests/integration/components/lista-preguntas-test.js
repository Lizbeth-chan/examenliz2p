import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lista-preguntas', 'Integration | Component | lista preguntas', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lista-preguntas}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lista-preguntas}}
      template block text
    {{/lista-preguntas}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
