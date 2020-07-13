import { SchemaComposer } from 'graphql-compose';

import db from '../utils/db'; // eslint-disable-line no-unused-vars

const schemaComposer = new SchemaComposer();

import { PostQuery, PostMutation } from './post';

schemaComposer.Query.addFields({
    ...PostQuery,
});

schemaComposer.Mutation.addFields({
    ...PostMutation,
});

export default schemaComposer.buildSchema();