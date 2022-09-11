import {
	Box,
	makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => {
	return {
		root: {
			width: '100%',
			height: '100%',
			borderRadius: 10,
			padding: theme.spacing(4),
			margin: theme.spacing(1),
			boxShadow: `0px 0px 10px 5px #f4f6fb`,
			transition: `all 0.4s`,
			'&:hover': {
				boxShadow: '0px 0px 20px 10px #f4f6fb',
			}
		},
	}
});

function SimpleLayout({ children }) {
	const styles = useStyles();

	return (
		<Box className={styles.root}>
			{children}
		</Box >
	)
}

export default SimpleLayout;