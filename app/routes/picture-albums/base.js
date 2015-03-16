import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		save: function() {
			var _this = this;
			this.modelFor(this.routeName).save().then(function(album) {
				_this.transitionTo("picture-albums.show", album);
			});
		},
		cancel: function() {
			return true;
		}
	}
});