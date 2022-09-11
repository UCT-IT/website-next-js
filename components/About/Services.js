import {
	Box,
	Card,
	CardContent,
	Grid,
	makeStyles,
	Typography,
} from '@material-ui/core';

import service from '../App/Functions/service';

const useStyles = makeStyles((theme) => {
	return {
		page: {
			paddingTop: theme.spacing(5),
			paddingBottom: theme.spacing(5),
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around',
			alignItems: 'center',
			textAlign: 'center',
			overflow: 'hidden',
			backgroundColor: theme.palette.secondary.main
		},
		section: {
			width: '80%'
		},
		sectionTitle: {
			fontSize: '30px',
			fontWeight: 'bold',
			marginBottom: theme.spacing(5),
		},
		serviceTitle: {
			fontSize: '20px',
			fontWeight: 'bold',
			marginBottom: theme.spacing(2),
		},
		card: {
			margin: theme.spacing(3),
			padding: theme.spacing(3),

			transition: '0.3s ease-out',
			'&:hover': {
				color: theme.palette.secondary.main,
				backgroundColor: theme.palette.primary.light
			}
		},
	}
});



const Services = () => {

	const styles = useStyles();

	const services = service.getServices();

	return (
		<Box className={styles.page}>
			<Box className={styles.section}>
				<Typography className={styles.sectionTitle}>
					What we do
				</Typography>


				<Grid container spacing={1}>
					{services.map((service, index) => (
						<Grid key={index} item xs={12} md={6} xl={4}>

							<Card className={styles.card}>
								<CardContent>
									<Grid container spacing={2} justifyContent='center' alignItems='center'>
										<Grid item xs={12} lg={6}>
											{service.icon}

										</Grid>
										<Grid item xs={12} lg={6}>
											<Typography className={styles.serviceTitle}>{service.title}</Typography>
											<Typography>{service.shortdescription}</Typography>
										</Grid>
									</Grid>

								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>

		</Box >
	);
};

export default Services;
