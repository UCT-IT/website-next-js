import {
	Box,
	Card,
	CardContent,
	Grid,
	makeStyles,
	Typography,
} from '@material-ui/core';

import {
	Computer,
	Facebook,
	OndemandVideo,
	CellWifi
} from '@material-ui/icons'

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
			transition: '0.3s ease-out',
			'&:hover': {
				color: theme.palette.secondary.main,
				backgroundColor: theme.palette.primary.light
			}
		},
		icon: {
			fontSize: '100px',
		}
	}
});



const Certification = () => {

	const styles = useStyles();

	const certificates = [
		{
			title: 'Certificate 1',
			description: 'Learn to use computers',
			icon: <Computer className={styles.icon} />
		},
		{
			title: 'Certificate 2',
			description: 'Social Media Strategy, Content, Campaign',
			icon: <Facebook className={styles.icon} />
		},
		{
			title: 'Certificate 3',
			description: 'Web, Social, Video & Print',
			icon: <OndemandVideo className={styles.icon} />
		},
		{
			title: 'Certificate 4',
			description: 'Social Media Strategy, Content, Campaign',
			icon: <CellWifi className={styles.icon} />
		}
	]

	return (
		<Box className={styles.page}>
			<Box className={styles.section}>
				<Typography className={styles.sectionTitle}>
					Certifications
				</Typography>


				<Grid container spacing={1}>
					{certificates.map((certificate, index) => (
						<Grid key={index} item xs={12} md={6} xl={4}>

							<Card className={styles.card}>
								<CardContent>
									<Grid container spacing={2} justifyContent='center' alignItems='center'>
										<Grid item xs={12} lg={6}>
											{certificate.icon}
										</Grid>
										<Grid item xs={12} lg={6}>
											<Typography className={styles.serviceTitle}>{certificate.title}</Typography>
											<Typography>{certificate.description}</Typography>
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

export default Certification;
