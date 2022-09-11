import React from 'react';

import {
	Box,
	makeStyles,
	Typography,
	Button,
} from '@material-ui/core';

import Link from 'next/link'

const useStyles = makeStyles((theme) => {
	return {
		page: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: theme.palette.secondary.main
		},
		section: {
			width: '80%',
			paddingRight: theme.spacing(4),
			paddingBottom: theme.spacing(8),
			paddingLeft: theme.spacing(4),
			textAlign: 'center'
		},
		sectionTitle: {
			fontSize: '36px',
			fontWeight: 'bold',
			textAlign: 'center',
			color: theme.palette.primary.main,
			margin: theme.spacing(5)
		},
		sectionContent: {
			marginBottom: theme.spacing(5)
		}
	}
});

const About = () => {
	const styles = useStyles();

	return (
		<Box className={styles.page}>
			<Typography className={styles.sectionTitle}>About Us</Typography>
			<Box className={styles.section}>
				<Typography className={styles.sectionContent}>
					We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy in computer training, online marketing & technology solutions. As a multidisciplinary company, we operate as a unified, design-led team. We’re passionate about what we do, and are driven by a desire to solve challenging problems on behalf of our partners. The talent behind our work is based on a deep understanding of data, technology, emerging trends and – above all – people.
				</Typography>

				<Link href='/about' passHref>
					<Button
						variant='outlined'
						color='primary'
					>
						About UCT IT
					</Button>
				</Link>
			</Box>
		</Box >
	);
};

export default About;
