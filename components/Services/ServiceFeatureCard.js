import { useState } from 'react';

import {
	Box,
	CardContent,
	makeStyles,
	Typography,
} from '@material-ui/core';

import Card from '../App/Card'

const useStyles = makeStyles((theme) => {
	return {
		page: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			margin: theme.spacing(2),
		},
		cardcontent: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			padding: theme.spacing(4)
		},
		title: {
			fontSize: '22px',
			fontWeight: 'bold',
			textAlign: 'center',
			color: theme.palette.primary.main,
			marginTop: theme.spacing(1)
		},
		description: {
			textAlign: 'center',
			marginTop: theme.spacing(1)
		}
	}
});

const ServiceCard = ({ title, icon, description }) => {
	const styles = useStyles();

	const [elevation, setElevation] = useState(0);

	return (
		<Box className={styles.page}>

			<Card elevation={elevation} onMouseOver={() => setElevation(5)} onMouseLeave={() => setElevation(0)}>
				<CardContent className={styles.cardcontent}>
					<Box>{icon}</Box>
					<Typography className={styles.title}>{title}</Typography>
					<Typography className={styles.description}>{description}</Typography>
				</CardContent>

			</Card>

		</Box >
	);
};

export default ServiceCard;
