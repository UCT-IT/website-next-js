import {
	Box,
	Card,
	CardContent,
	Grid,
	makeStyles,
	Typography,
} from '@material-ui/core';

import {
	MonetizationOnOutlined,
	ContactSupportOutlined,
	HowToReg,
	LocalAtm
} from '@material-ui/icons';

const picture = '/About/Choose/choose.png'

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
			backgroundColor: theme.palette.secondary.main,
		},
		section: {
			width: '50%'
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
			margin: theme.spacing(1),
			boxShadow: `6px 6px 2px ${theme.palette.secondary.dark}`
		},
		icon: {
			fontSize: '100px',
			color: theme.palette.primary.main
		}
	}
});



const Certification = () => {

	const styles = useStyles();

	const services = [
		{
			title: 'Unbelievably Fair Pricing',
			icon: <MonetizationOnOutlined className={styles.icon} />
		},
		{
			title: '24/7 Local Support',
			icon: <ContactSupportOutlined className={styles.icon} />
		},
		{
			title: 'Personalized customer service',
			icon: <HowToReg className={styles.icon} />
		},
		{
			title: 'Guaranteed refund options',
			icon: <LocalAtm className={styles.icon} />
		},
	]

	return (
		<Box className={styles.page}>
			<Box className={styles.section}>
				<Typography className={styles.sectionTitle}>
					Why Choose Us?
				</Typography>

				<Grid container spacing={2}>

					{services.map((service, index) => (
						<Grid key={index} item xs={12} md={6}>
							<Card className={styles.card}>
								<CardContent>
									<Grid container spacing={1} justifyContent='center' alignItems='center'>
										<Grid item xs={12}>
											{service.icon}
										</Grid>
										<Grid item xs={12}>
											<Typography>{service.title}</Typography>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Grid>
					))}
					

					{/* <Grid item xs={12} md={6}>
						<Image src={picture} alt='' width='320vw' height='400vh' />
					</Grid> */}
				</Grid>
			</Box>
		</Box >
	);
};

export default Certification;
