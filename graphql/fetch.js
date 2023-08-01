import { GraphQLClient } from 'graphql-request';

export const initClient = () => {
	return new GraphQLClient(process.env.NEXT_PUBLIC_API_URL);
};

export const isServer = () => typeof window === 'undefined';
