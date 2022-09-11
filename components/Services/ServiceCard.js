import {
	Box,
	Card,
	CardContent,
	Button,
	CardActions,
	makeStyles,
	Typography,
} from '@material-ui/core';

import Link from 'next/link';

import {
	KeyboardArrowRight
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => {
	return {
		page: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			margin: theme.spacing(1),
		},
		card: {
			zIndex: 0
		},
		cardcontent: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			zIndex: 0
		},
		heading: {
			cursor: 'pointer',
			textAlign: 'center',
			backgroundColor: theme.palette.secondary.main,
			padding: theme.spacing(6),
			transition: 'all 0.25s ease-out',
			'&:hover': {
				backgroundColor: theme.palette.primary.main,
				color: theme.palette.secondary.light,
				transform: 'scale(1.1)'
			}
		},
		headingText: {
			fontSize: '1.5rem',
			fontWeight: 'bold',
		},
		divider: {
			background: theme.palette.secondary.main
		}
	}
});

const ServiceCard = ({ title, link, description }) => {
	const styles = useStyles();

	return (
		<Box className={styles.page}>

			<Card elevation={0}>
				<Link href={link} passHref>
					<Box className={styles.heading}>
						<Typography className={styles.headingText}>{title}</Typography>
					</Box>
				</Link>

				<CardContent className={styles.cardcontent}>
					<Typography >{description}</Typography>
				</CardContent>

				<CardActions>
					<Link href={link} passHref>
						<Button
							variant='text'
						>
							{`Visit ${title}`}
							<KeyboardArrowRight />
						</Button>
					</Link>
				</CardActions>

			</Card>

		</Box >
	);
};

export default ServiceCard;
