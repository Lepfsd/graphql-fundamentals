import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import mongoose from 'mongoose';

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/graphqlfundamentals');

app.get('/', (req, res) => {
	return res.json({
		msg: "Welcome to GraphQL"
	});
});

app.use('/graphql', graphqlHTTP({
	schema: schema,
	graphiql: true
}));

app.listen(3000, () => {
	console.log('app is running on port 3000');
});