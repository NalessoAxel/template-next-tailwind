import Layout from '@components/Layout';
import Footer from '@components/Layout/Footer';
import { PageProvider } from '@contexts/pageContext';
import '@styles/globals.css';
import PropTypes from 'prop-types';
import { SWRConfig } from 'swr';

export default function App({ Component, pageProps }) {
	return (
		<SWRConfig
			value={{
				refreshInterval: 60000,
				revalidateOnMount: true,
			}}
		>
			<PageProvider>
				<Layout />
				<Component {...pageProps} />
				<Footer />
			</PageProvider>
		</SWRConfig>
	);
}

App.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};
