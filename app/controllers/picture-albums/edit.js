import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addPicture: function() {
			this.get('model').set('pictures', this.get('model').pictures || []);
			this.get('model').get('pictures').pushObject({
				name: '',
				description: '',
				width: 0,
				height: 0,
				url :''
			});
		},
		save: function() {
			if (!this.get('isValid')) {
				console.log("Model is not valid");
				this.set('errorMessages', "Model is not valid");
				return false;
			}
			return true;
		}
	},
	isValid: Ember.computed('name', function() {
		return !Ember.isEmpty(this.get('name'));
	})
});

