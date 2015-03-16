import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('picture-albums', function() { 
  	this.route('show', { path: ':picture_album_id' });
  	this.route('new');
  	this.route('edit', { path: ':picture_album_id/edit' });
  });
});

export default Router;