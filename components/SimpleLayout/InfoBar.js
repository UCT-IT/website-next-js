import { useState } from 'react'

import {
	Box,
	Typography,
	makeStyles,
	useTheme,
	useMediaQuery
} from '@material-ui/core'

import {
	Phone,
	LocationOn,
	Timer
} from '@material-ui/icons';




function InfoBar() {

	const theme = useTheme();
	const breakpoint = useMediaQuery(theme.breakpoints.up("lg"));

	const useStyles = makeStyles((theme) => {
		return {
			bar: {
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'flex-end',
				paddingTop: theme.spacing(1.6),
				paddingBottom: theme.spacing(0.8),
				padding: theme.spacing(2),
				backgroundColor: theme.palette.primary.dark,
				color: theme.palette.secondary.light
			},
			content: {
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
			},
			text: {
				fontSize: breakpoint ? 16 : 10,
				paddingLeft: theme.spacing(1),
				paddingRight: theme.spacing(1)
			}
		}
	});

	const styles = useStyles();

	return (
		<Box className={styles.bar}>
			<Box className={styles.content}>
				<Phone />
				<Typography className={styles.text}>
					<Link href={'tel:+8801996399534'} passHref>
						Phone: +880 1996-399534
					</Link>
				</Typography>
			</Box>
			{
				breakpoint &&
				<Box className={styles.content}>
					<LocationOn />
					<Typography className={styles.text}>
						House 37 (3rd Floor), Road 7,

						Sector 3, Uttara,

						Dhaka-1230, Bangladesh
					</Typography>
				</Box>
			}

			<Box className={styles.content}>
				<Timer />
				<Typography className={styles.text}>
					9 a.m - 9 p.m
				</Typography>
			</Box>
		</Box>
	)
}

export default InfoBar;
