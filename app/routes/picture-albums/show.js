import Ember from 'ember';

export default Ember.Route.extend({
	
	actions: {
		delete: function(album) {
			album.destroyRecord();
			this.transitionTo('picture-albums.index');
		}
	}
});