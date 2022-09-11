import {
	Box,
	makeStyles,
} from '@material-ui/core';

import Info from '../components/About/Heading'
import Services from '../components/About/Services';
import Certification from '../components/About/Certification';
import Choose from '../components/About/Choose';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/Home/Footer'
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
				<title>About Us</title>
			</Head>

			<Info />

			<Services />

			<Certification />

			<Choose />

			<ContactForm />

			<Footer />

		</Box >
	);
};

export default Home;
