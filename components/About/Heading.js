import {
	Box,
	Button,
	makeStyles,
	Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => {
	return {
		page: {
			paddingTop: theme.spacing(8),
			paddingBottom: theme.spacing(8),
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around',
			alignItems: 'center',
			textAlign: 'center',
			overflow: 'hidden',
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.primary.contrastText
		},
		section: {
			width: '80%',
		},
		sectionTitle: {
			fontSize: '30px',
			fontWeight: 'bold',
			marginBottom: theme.spacing(5),
		},
		sectionContent: {
			marginBottom: theme.spacing(5),
		}
	}
});

const Heading = () => {
	const styles = useStyles();

	return (
		<Box className={styles.page}>

			<Box className={styles.section}>

				<Typography className={styles.sectionTitle}>
					UCT IT Aims to provide the best services
				</Typography>
				<Typography className={styles.sectionContent}>
					We like to ensure our clients are satisfied with our year round teaching services as well as our 24/7 365 days a year coverage of our IT services including digital marketing and web development. We do so by ensuring maximum quality in every aspect be that SEO (Search Engine Optimization), SMM (Social Media Management), Creative Content, Online Advertisement, or PR.

					Our philosophy is to make sure our clients break through in today’s saturated IT industry. Analyzing and understanding our clients’ needs is a part of what we do while making sure making sure we understand our client’s values and business model.
				</Typography>
				{/* <Button
					color='secondary'
					variant='outlined'>
					Download our documentation
				</Button> */}
			</Box>

		</Box >
	);
};

export default Heading;
