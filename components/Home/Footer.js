import React from 'react';

import {
	Box,
	Button,
	Grid,
	List,
	ListItemText,
	makeStyles,
	Typography,
} from '@material-ui/core';

import Link from 'next/link';

import service from '../App/Functions/service';

const useStyles = makeStyles((theme) => {

	return {
		page: {
			display: 'flex',
			flexDirection: 'column',
			color: theme.palette.secondary.light
		},
		footer: {
			backgroundColor: theme.palette.primary.main,
			paddingTop: theme.spacing(5)
		},
		titleContainer: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			paddingTop: theme.spacing(2)
		},
		title: {
			fontSize: 28,
			fontWeight: 'bold',
			color: theme.palette.secondary.main,
			marginBottom: theme.spacing(4)
		},
		button: {
			margin: theme.spacing(1),
			padding: theme.spacing(2.6),
			borderRadius: 2
		},
		footerNavigation: {
			marginTop: theme.spacing(6),
			textAlign: 'center'
		},
		navigationTitle: {
			fontWeight: 'bold',
			fontSize: '22px'
		},
		navigationItem: {
			cursor: 'pointer',
			margin: theme.spacing(2),
			fontSize: 14,
			color: theme.palette.secondary.light
		},
		copyright: {
			margin: theme.spacing(3)
		}
	}
});


const navigation = [
	{
		title: 'Our Services',
		items: service.getServices()
	},
	{
		title: 'Our Company',
		items: [
			{
				title: 'About Us',
				link: '/about'
			},
			{
				title: 'Contact',
				link: '/contact'
			},
			{
				title: 'Careers',
				link: '/careers'
			}
		]
	},
	{
		title: 'Legal',
		items: [
			{
				title: 'Privacy Policy',
				link: '/privacy'
			},
			{
				title: 'Terms & Conditions',
				link: '/terms'
			}
		]
	}
]

const Introduction = () => {
	const styles = useStyles();

	return (
		<Box className={styles.page}>
			<Box className={styles.footer}>
				<Box className={styles.titleContainer}>
					<Typography className={styles.title}>UCT IT</Typography>

					<Box>
						<Link href='/contact' passHref>
							<Button
								variant='contained'
								color='secondary'
								className={styles.button}>
								Contact Us
							</Button>
						</Link>

						<Link href='/services' passHref>
							<Button
								variant='outlined'
								color='secondary'
								className={styles.button}>
								Browse Services
							</Button>
						</Link>
					</Box>
				</Box>

				<Grid container spacing={2} className={styles.footerNavigation}>
					<Grid item xs={12} md>
						<Typography className={styles.navigationTitle}>
							UCT IT
						</Typography>
						<Box className={styles.navigationItem}>
							<Typography>
								We offer a range of digital services with the adaptation of cutting-edge web, mobile and social technology.
							</Typography>

						</Box>
						<Typography className={styles.navigationTitle}>
							Phone: +880 1714-020193
						</Typography>
						<Typography className={styles.navigationTitle}>
							Email:  
							<Link href={'mailto:uctibd@gmail.com'} passHref>
								uctitbd@gmail.com
							</Link>
						</Typography>
					</Grid>
					{navigation.map((navitem, index1) => (
						<Grid key={index1} item xs={6} md>
							<Typography className={styles.navigationTitle}>
								{navitem.title}
							</Typography>
							<List>
								{navitem.items.map((subitem, index2) => (

									<ListItemText key={index2}>
										<Link href={subitem.link} passHref>
											<Typography className={styles.navigationItem}>
												{subitem.title}
											</Typography>
										</Link>
									</ListItemText>
								))}
							</List>
						</Grid>
					))}
					<Grid item xs={12} md>
						<Typography className={styles.navigationTitle}>Our office</Typography>
						<Typography>
							House 37 (3rd Floor), Road 7,
						</Typography>
						<Typography>
							Sector 3, Uttara,
						</Typography>
						<Typography>
							Dhaka-1230, Bangladesh.
						</Typography>
						<Box className={styles.navigationItem}>
							<iframe width="300" height="300" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.7276384922206!2d90.39277636711994!3d23.86380340450758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5f407260b45%3A0xba53618e71d39a01!2sUttara%20Computer%20Training%20%26%20IT%20Firm!5e0!3m2!1sen!2sca!4v1653322944977!5m2!1sen!2sca" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
							</iframe>
						</Box>
					</Grid>
				</Grid>

				<Typography className={styles.copyright}>
					© UCT IT 2022
				</Typography>
			</Box>

		</Box>
	);
};



export default Introduction;
