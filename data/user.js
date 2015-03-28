var Model = rootRequire('helpers/model');
var UserType = rootRequire('data/properties/user-type');
var Gender = rootRequire('data/properties/gender');

var User = new Model({
	endpoint: 'user'
});

User.extend({
	id: {
		type: 'number',
		map: 'user_id'
	},
	name: {
		type: 'string'
	},
	password: {
		type: 'string'
	},
	user_type: {
		type: 'object',
		model: UserType
	},
	email: {
		type: 'string'
	},
	reputation: {
		type: 'number'
	},
	bio: {
		type: 'string'
	},
	created_at: {
		type: 'date'
	},
	active_at: {
		type: 'date'
	},
	total_revisions: {
		type: 'number'
	},
	revisions_applied: {
		type: 'number'
	},
	revisions_reverted: {
		type: 'number'
	},
	gender: {
		type: 'object',
		model: Gender
	},
});

User.getCurrent = function(accessToken) {
	return this.findOne({
		path: '/account/',
		accessToken: accessToken
	});
}

module.exports = User;
