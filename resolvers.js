const users = [];
let user = {};
export const resolvers = {
	Query: {
		item: () => {
			return {
				id: '21312112',
				text: 'This is hacker new Item',
				timeISO: '2pm saturday',
				title: 'GraphQL learning',
				deleted: false
			}
		},
		getUser: (_, {id}) => {
			return users.find(user => user.id === id);
		},
		users: () => {
			return users;
		},
	},
	Mutation: {
		createUser: (_, {input}, context, info) => {
			user = input;
			users.push(user);
			return user;
		}
	}
};

export default resolvers;