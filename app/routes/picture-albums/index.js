import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.find('picture-album');
	}, 
	actions: {
		delete: function(album) {
			album.destroyRecord();
			this.transitionTo('picture-albums.index');
		}
	}
});
