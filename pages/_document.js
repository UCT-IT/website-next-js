import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheets = new ServerStyleSheets();
		const originalRenderPage = ctx.renderPage;

		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
			});

		const initialProps = await Document.getInitialProps(ctx);

		return {
			...initialProps,
			// Styles fragment is rendered after the app and page rendering finish.
			styles: [
				...React.Children.toArray(initialProps.styles),
				sheets.getStyleElement()
			]
		};
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="description" content="One of the main objectives of UCT IT is to create skilled and professionally committed IT experts, by providing world-class training facilities, to contribute to the development of the IT industry of Bangladesh as well as to make them capable enough to work in the local and international IT industry and marketplaces. The other objective is to provide professional and world class IT solutions and IT services." />
					<meta name="keywords" content='Uttara, computer, training, IT, firm, UCT, IT, solutions, services, training, digital marketing, marketing, web design, web development
					, reliable, affordable' />
					<link rel="icon" href="/Home/logo.jpg" />
					<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400&display=swap" rel="stylesheet"></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;