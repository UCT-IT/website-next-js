import {
	Box,
	Grid,
	Typography,
	makeStyles,
} from '@material-ui/core';

import { useRouter } from 'next/router';

import service from '../../components/App/Functions/service'

import Heading from '../../components/Services/Heading';
import Subheading from '../../components/Services/Subheading';
import ServiceFeatureCard from '../../components/Services/ServiceFeatureCard';
import Grow from '../../components/Home/Grow';
import Footer from '../../components/Home/Footer';
import Head from 'next/head';

const useStyles = makeStyles((theme) => {
	return {
		page: {
			display: 'flex',
			flexDirection: 'column',
			overflow: 'hidden',
		},
		info: {
			padding: theme.spacing(5),
			background: theme.palette.secondary.main
		},
		title: {
			fontSize: '32px',
			fontWeight: 'bold',
			textAlign: 'center'
		},
		description: {
			whiteSpace: 'pre-line',
			padding: theme.spacing(4),
		}
	}
});

const Service = () => {
	const styles = useStyles();

	const router = useRouter();

	const serviceinfo = service.getServiceByLink(`/services/${router.query.service}`);
	
	return (
		<Box className={styles.page}>
			<Head>
				<title>Our Services - {serviceinfo?.title}</title>
			</Head>
			<Heading
				title={serviceinfo?.title}
			/>
			<Subheading 
				subtitle={serviceinfo?.subtitle}	
			/>

			<Grid container spacing={2}>
				{serviceinfo?.features?.featureslist?.map((feature, index) => (

					<Grid key={index} item xs={12} md={6} lg={4}>
						<ServiceFeatureCard
							key={index}
							title={feature.title}
							icon={feature.icon}
							description={feature.description}
						/>
					</Grid>
				))}
			</Grid>
			{serviceinfo?.features && 
				<Box className={styles.info}>
					<Typography className={styles.title}>{serviceinfo?.features?.title}</Typography>
					<Typography className={styles.description}>{serviceinfo?.features?.description}</Typography>
				</Box>
			}
			
			<Grow />

			<Footer />

		</Box >
	);
};



export default Service;
