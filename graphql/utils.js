import { request } from 'graphql-request';

// Checks if is SSR or client
export const isServer = () => typeof window === 'undefined';

// GraphQL client fetcher
export const fetcher = async (query, variables = null) => {
	const response = await request(process.env.NEXT_PUBLIC_API_URL, query, variables);

	return response;
};
