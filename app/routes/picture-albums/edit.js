import PictureAlbumsBaseRoute from './base';

export default PictureAlbumsBaseRoute.extend({
	actions: {
		cancel: function() {
			this.transitionTo("picture-albums.show", this.modelFor(this.routeName));
			return false;
		}
	}
});