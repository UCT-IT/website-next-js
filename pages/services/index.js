import {
	Box,
	Grid,
	makeStyles,
} from '@material-ui/core';
import service from '../../components/App/Functions/service';
import ServiceCard from '../../components/Services/ServiceCard';
import Footer from '../../components/Home/Footer';
import Head from 'next/head';

const useStyles = makeStyles((theme) => {
	return {
		page: {
			display: 'flex',
			flexDirection: 'column',
			overflow: 'hidden',
			backgroundColor: theme.palette.secondary.light
		},
		section: {
			padding: theme.spacing(5)
		}
	}
});

const services = service.getServices();

const Services = () => {
	const styles = useStyles();

	return (
		<Box className={styles.page}>
			<Head>
				<title>Our Services</title>
			</Head>
			<Grid container spacing={2} className={styles.section}>
				{services.map((service, index) => (
					<Grid key={index} item xs={12} sm={6} lg={4}>
						<ServiceCard
							title={service.title}
							link={service.link}
							description={service.description}
						/>
					</Grid>
				))}

			</Grid>

			<Footer />

		</Box >
	);
};

export default Services;
