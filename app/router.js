import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('lista-examenes');
  this.route('examen-details');
  this.route('nuevo-examen');
  this.route('nueva-pregunta');
});

export default Router;
