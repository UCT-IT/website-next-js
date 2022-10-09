import {
	Box,
	Grid,
	Paper,
	makeStyles,
	Typography,
} from '@material-ui/core';

import Link from 'next/link'

const useStyles = makeStyles((theme) => {
	return {
		page: {
			display: 'flex',
			flexDirection: 'column',
			overflow: 'hidden',
			backgroundColor: theme.palette.secondary.main,
			textAlign: 'center'
		},
		section: {
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around',
			alignItems: 'center',
			padding: theme.spacing(5)
		},
		sectionTitle: {
			fontSize: '36px',
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},
		sectionSubtitle: {
			fontSize: '24px',
			color: theme.palette.primary.main,
		}
	}
});

const Featured = () => {
	const styles = useStyles();

	return (
		<Box className={styles.page}>

			<Box>
				<Grid container>

					<Grid item xs={12} md={6}>
						<Box className={styles.section}>
							<Box>
								<Typography className={styles.sectionTitle}>Our Location</Typography>
								<Typography className={styles.sectionSubtitle}>
									House 37 (3rd Floor), Road 7,
								</Typography>
								<Typography className={styles.sectionSubtitle}>

									Sector 3, Uttara,
								</Typography>

								<Typography className={styles.sectionSubtitle}>

									Dhaka-1230, Bangladesh.
								</Typography>
							</Box>

							<Box>
								<Typography className={styles.sectionTitle}>Reach Out</Typography>
								<Typography className={styles.sectionSubtitle}>
									<Link href={'tel:+8801996399534'} passHref>
										Phone: +880 1996-399534
									</Link>
								</Typography>

								<Typography className={styles.sectionSubtitle}>
									<Link href={'mailto:uctibd@gmail.com'} passHref>
										Email: uctitbd@gmail.com
									</Link>
								</Typography>
							</Box>

						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<iframe width="100%" height={500} id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.7276384922206!2d90.39277636711994!3d23.86380340450758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5f407260b45%3A0xba53618e71d39a01!2sUttara%20Computer%20Training%20%26%20IT%20Firm!5e0!3m2!1sen!2sca!4v1653322944977!5m2!1sen!2sca" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
						</iframe>
					</Grid>
				</Grid>
			</Box>

		</Box >
	);
};

export default Featured;
