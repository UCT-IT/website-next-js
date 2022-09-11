import {
	Box,
	Button,
	makeStyles,
	Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => {
	return {
		page: {
			paddingTop: theme.spacing(4),
			textAlign: 'center',
			overflow: 'hidden',
			color: theme.palette.secondary.contrastText
		},
		sectionTitle: {
			fontSize: '2em',
			fontWeight: 'bold',
			marginBottom: theme.spacing(5),
		}
	}
});

const Heading = ({ subtitle }) => {
	const styles = useStyles();

	return (
		<Box>
			{subtitle &&
				<Box className={styles.page}>
					<Typography className={styles.sectionTitle}>
						{subtitle}
					</Typography>
				</Box>
			}
		</Box >
	);
};

export default Heading;
