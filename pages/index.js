import {
	Box,
	makeStyles,
} from '@material-ui/core';

import Introduction from '../components/Home/Introduction';
import Featured from '../components/Home/Featured';
import About from '../components/Home/About';
import Reviews from '../components/Home/Reviews';
import Grow from '../components/Home/Grow';
import Footer from '../components/Home/Footer';
import Head from 'next/head';

const useStyles = makeStyles((theme) => {
	return {
		page: {
			display: 'flex',
			flexDirection: 'column',
			overflow: 'hidden',
		},
	}
});

const Home = () => {
	const styles = useStyles();

	return (
		<Box className={styles.page}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>UCT IT - Welcome</title>
			</Head>

			<Introduction />

			<Featured />

			<About />

			<Reviews />

			<Grow />

			<Footer />

		</Box >
	);
};

export default Home;
