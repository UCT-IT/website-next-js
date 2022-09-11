import { useState } from 'react';

import {
	Box,
	Button,
	Link,
	makeStyles,
	useTheme,
	useMediaQuery,
	Typography,
} from '@material-ui/core';


const ContactForm = () => {
	const theme = useTheme();
	const breakpointUp = useMediaQuery(theme.breakpoints.up("sm"));
	const useStyles = makeStyles((theme) => {
		return {
			page: {
				paddingTop: theme.spacing(6),
				paddingBottom: theme.spacing(6),
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				backgroundColor: theme.palette.secondary.light
			},
			sectionTitle: {
				fontSize: '30px',
				fontWeight: 'bold',
				marginBottom: theme.spacing(5),
			},
			name: {
				fontFamily: 'Quicksand',
				fontSize: 16,
				width: breakpointUp ? '60vw': '80vw',
				height: 40,
				margin: theme.spacing(2),
				padding: theme.spacing(1),
				border: '1px solid #ccc',
			},
			email: {
				fontFamily: 'Quicksand',
				fontSize: 16,
				width: breakpointUp ? '60vw': '80vw',
				height: 40,
				margin: theme.spacing(2),
				padding: theme.spacing(1),
				border: '1px solid #ccc',
			},
			message: {
				fontFamily: 'Quicksand',
				fontSize: 16,
				width: breakpointUp ? '60vw': '80vw',
				height: '20vh',
				margin: theme.spacing(2),
				padding: theme.spacing(1),
				border: '1px solid #ccc',
			},
			disclaimer: {
				width: '70vw',
				marginTop: theme.spacing(2),
				fontSize: 14
			}
		}
	});
	const styles = useStyles();
	const [status, setStatus] = useState("Submit");
	const [disabled, setDisabled] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("Sending...");
		setDisabled(true);
		const { name, email, phone, message } = e.target.elements;
		let details = {
			name: name.value,
			email: email.value,
			message: message.value,
			phone: phone.value
		};
		let response = await fetch(`/api/contact`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(details),
		});
		let result = await response.json();

		setStatus(result.message);

		setTimeout(() => {
			setStatus('Submit');
			setDisabled(false);
		}, 3000)
	};
	return (
		<Box className={styles.page}>
				<Typography className={styles.sectionTitle}>
					Contact Us
				</Typography>

				<form onSubmit={handleSubmit}>
					<Box>
						<label htmlFor="name"><Typography>Name:</Typography></label>
						<input className={styles.name} type="text" id="name" required placeholder='Let us know who you are' />
					</Box>
					<Box>
						<label htmlFor="email"><Typography>Email:</Typography></label>
						<input className={styles.email} type="email" id="email" required placeholder='Enter your email address' />
					</Box>
					<Box>
						<label htmlFor="phone"><Typography>Phone Number:</Typography></label>
						<input className={styles.email} type="phone" id="phone" placeholder='Enter your phone number' />
					</Box>
					<Box>
						<label htmlFor="message"><Typography>Message:</Typography></label>
						<textarea className={styles.message} id="message" required placeholder='How can we help?' />
					</Box>
					<Button
						variant='contained'
						color='primary'
						disabled={disabled}
						type="submit">{status}
					</Button>
				</form>

				<Box className={styles.disclaimer}>
					<Typography>
						UCT IT needs the information you provide to us to contact you about our products and services.
						You may unsubscribe from these communications at any time.
						For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy,
						check out our <Link href='/policy'>Privacy Policy.</Link>
					</Typography>
					
				</Box>
		</Box>
	);
};

export default ContactForm;