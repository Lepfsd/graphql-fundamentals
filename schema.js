import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers';

const typeDefs = `
	type HackerNewsItem {
		id: String
		text: String
		timeISO: String
		title: String!
		deleted: Boolean
		time: Int
	}
	type Email {
		email: String!
	}
	type User{
		id: ID
		firstName: String!
		lastName: String!
		email: String
		age: Int!
		gender: Gender
		items: [HackerNewsItem]
	}
	enum Gender{
		MALE
		FEMALE
		OTHER
	}
	type Query {
		getItem(id: ID!): HackerNewsItem 
		getUser(id: ID): User
		getUsers: [User]
	}
	input HackerNewsInput{
		id: String
		text: String
		timeISO: String
		title: String
		deleted: Boolean
		time: Int
	}
	input UserInput {
		id: ID
		firstName: String!
		lastName: String!
		email: String
		age: Int!
		gender: Gender
		items: [ID!]
	}
	type Mutation {
		createUser(input: UserInput) : User
		updateUser(input: UserInput): User
		deleteUser(id: ID!): User
		createItem(input: HackerNewsInput ) : HackerNewsItem
	}
`;

const schema = makeExecutableSchema({typeDefs, resolvers})

export default schema;