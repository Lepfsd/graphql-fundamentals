const users = [];
let user = {};
const resolvers = {
	item: () => {
		return {
			id: '21312112',
			text: 'This is hacker new Item',
			timeISO: '2pm saturday',
			title: 'GraphQL learning',
			deleted: false
		}
	},
	getUser: ({id}) => {
		return users.find(user => user.id === id);
	},
	users: () => {
		return users;
	},
	createUser: ({input}) => {
		user = input;
		users.push(user);
		return user;
	}
};

export default resolvers;