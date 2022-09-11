import React, { useState, useEffect } from 'react';

import {
	Box,
	makeStyles,
	Typography,
	Button,
	useTheme,
	useMediaQuery,
	ImageList,
	ImageListItem,
	Container
} from '@material-ui/core';

import Link from 'next/link';

// import { Fade } from '@material-ui/core';
import service from '../App/Functions/service';

import InfoBar from '../SimpleLayout/InfoBar'

const introImage = '/intro-alt.svg';

const Introduction = () => {
	const theme = useTheme();
	const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

	const useStyles = makeStyles((theme) => {
		return {
			page: {
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				overflow: 'hidden',
			},
			introBackground: {
				height: '65vh',
				backgroundImage: `url(${introImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			},
			intro: {
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				padding: theme.spacing(2)
			},
			introText: {
				fontSize: isMdUp ? 42 : 28,
				fontWeight: 'bold',
				color: theme.palette.primary.dark
			},
			serviceText: {
				fontSize: isMdUp ? 32 : 24,
				color: theme.palette.primary.dark,
				marginTop: theme.spacing(1),
				marginBottom: theme.spacing(1),
				textAlign: 'center'
			},
			serviceButtonText: {
				fontSize: isMdUp ? 20 : 16,
				padding: theme.spacing(2),
				margin: theme.spacing(1)
			},
			descriptionText: {
				fontWeight: 'bold'
			},
			imageList: {
				flexWrap: 'nowrap',
			},
			imageListItem: {
				maxHeight: '200px',
				maxWidth: '200px'
			},
			button: {
				marginTop: theme.spacing(2),
				marginBottom: theme.spacing(2),
				padding: theme.spacing(2),
				color: theme.palette.secondary.main,
				background: theme.palette.primary.main,
				'&:hover': {
					background: theme.palette.primary.dark
				}
			},
			buttonText: {
				fontSize: isMdUp ? 20 : 15,
			}
		}
	});

	const styles = useStyles();

	const [animation, setAnimation] = useState(true);
	const [serviceTextIndex, setServiceTextIndex] = useState(0);

	useEffect(() => {
		if (animation === true) {
			setTimeout(() => {
				setAnimation(false);
			}, 3500)
		} else {
			setTimeout(() => {
				setAnimation(true);
			}, 500);
		}
	}, [animation]);


	const services = service.getServices();

	// const changeServiceText = () => {
	// 	setServiceTextIndex((prev) => (prev + 1) % services.length);
	// }

	return (
		<Box className={styles.page}>

			<InfoBar />

			<Box className={styles.introBackground}>
				<Box className={styles.intro}>
					<Typography className={styles.introText}>Welcome</Typography>
					<Typography className={styles.serviceText}>Browse our IT Solutions and IT Services</Typography>
					{/* <Fade in={animation} timeout={{ enter: 600, exit: 450 }} onExited={() => changeServiceText()}> */}
					<Container>
						<ImageList className={styles.imageList} rowHeight={isMdUp ? 160 : 140}>
							{
								services.map((service, index) => (
									<ImageListItem key={index} className={styles.imageListItem}>
										<Button key={index} variant='outlined' className={styles.serviceButtonText}>
											<Link href={service.link} passHref>
												{service.title}
											</Link>
										</Button>
									</ImageListItem>
								))
							}
						</ImageList>
					</Container>


					{/* </Fade> */}
					<Link href='/contact' passHref>
						<Button
							variant='outlined'
							className={styles.button}
						>
							<Typography className={styles.buttonText}>Contact Us</Typography>
						</Button>
					</Link>

				</Box>

			</Box>

		</Box >
	);
};

export default Introduction;
