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
			fontSize: '3em',
			fontWeight: 'bold',
			marginBottom: theme.spacing(5),
		}
	}
});

const Heading = ({ title }) => {
	const styles = useStyles();

	return (
		<Box className={styles.page}>

			<Box className={styles.section}>

				<Typography className={styles.sectionTitle}>
					{title}
				</Typography>
			</Box>

		</Box >
	);
};

export default Heading;
