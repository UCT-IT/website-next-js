import React from 'react';

import {
	Box,
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
			justifyContent: 'center',
			alignItems: 'center',
			backgroundImage: 'url(https://uploads-ssl.webflow.com/601a133a769fa8f8d45d95ba/61854dd04e61c933221fc418_map.svg)',
		},
		container: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			width: '80%',
		},
		sectionTitle: {
			fontSize: '30px',
			fontWeight: 'bold',
			color: theme.palette.primary.main,
			marginBottom: theme.spacing(4),
			textAlign: 'center'
		},
		sectionContent: {
			textAlign: 'center'
		},
	}
});

const Works = () => {
	const styles = useStyles();

	return (
		<Box className={styles.page}>
			<Box className={styles.container}>
				<Typography className={styles.sectionTitle}>
					Grow With With Us Today!
				</Typography>
				<Typography className={styles.sectionContent}>
					With the help of our Experienced Professionals
				</Typography>
			</Box>
		</Box>
	);
};

export default Works;
