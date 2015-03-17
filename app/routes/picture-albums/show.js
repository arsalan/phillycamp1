import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('picture-album', params.pictureAlbumId);
	},
	actions: {
		delete: function(album) {
			album.destroyRecord();
			this.transitionTo('picture-albums.index');
		}
	}
});