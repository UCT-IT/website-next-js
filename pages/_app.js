import { useEffect } from 'react'

import '../styles/globals.css'
import SimpleLayout from '../components/App/SimpleLayout'
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
	typography: {
		fontFamily: `'Quicksand', sans-serif`,
	},
	palette: {
		primary: {
			main: '#00257A',
		},
		secondary: {
			main: '#f3f5ff',
			light: 'white'
		},
	},

});

function MyApp({ Component, pageProps }) {

	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<SimpleLayout>
				<Component {...pageProps} />
			</SimpleLayout>
		</ThemeProvider>
	)
}

export default MyApp
