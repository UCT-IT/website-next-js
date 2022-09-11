import {
	Box,
	makeStyles,
} from '@material-ui/core';

import Location from '../components/Contact/Location';
import ContactForm from '../components/Contact/ContactForm';
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
				<title>Contact Us</title>
			</Head>

			<ContactForm />

			<Location />

			<Footer />

		</Box >
	);
};

export default Home;
