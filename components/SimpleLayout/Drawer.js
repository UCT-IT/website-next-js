import React, { useState, useEffect } from 'react'

import {
	Box,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Collapse,
	Typography,
	makeStyles,
	Button,
} from '@material-ui/core'
import {
	ExpandMore,
	KeyboardArrowRight,
	CloseOutlined
} from '@material-ui/icons';

import Link from 'next/link';
import Image from 'next/image'

const useStyles = makeStyles((theme) => {
	return {
		drawer: {
			width: '100%'
		},
		drawerPaper: {
			background: theme.palette.secondary.main,
			color: theme.palette.primary.dark,
			padding: theme.spacing(1),
			width: '100%',
		},
		titleContainer: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: theme.spacing(2)
		},
		titleBox: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		},
		title: {
			marginLeft: theme.spacing(1),
			fontSize: 32,
			fontWeight: 'bold',
		},
		subitemButton: {
			width: '30%',
			display: 'flex',
			justifyContent: 'flex-end'
		},
		closeButton: {
			color: theme.palette.primary.main,
			minWidth: theme.spacing(2)
		}
	}
});

function DrawerBar({ logo, title, drawerItems, setDrawerOpen, drawerOpen }) {

	const styles = useStyles();
	const [state, setState] = useState({});
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(drawerItems)
	}, [drawerItems])

	const handleClick = (e) => {
		setState(prevState => {
			return { ...prevState, [e]: !state[e] };
		});
	};

	return (
		<Drawer
			className={styles.drawer}
			classes={{ paper: styles.drawerPaper }}
			variant='temporary'
			open={drawerOpen}
			anchor='top'
			onClose={() => setDrawerOpen(false)}
		>
			<Box className={styles.titleContainer}>
				<Box className={styles.titleBox}>
					<Image src={logo} width={50} height={50} alt='logo'/>
					<Typography className={styles.title}>
						{title}
					</Typography>
				</Box>
				
				<Button className={styles.closeButton} onClick={() => setDrawerOpen(false)}>
					<CloseOutlined />
				</Button>
			</Box>

			<List>
				{items?.map((item, index) => (
					<Box key={index}>
						<ListItem
							button
						>
							<ListItemText onClick={() => setDrawerOpen(false)}>
								<Link href={item.link} passHref>
									<Typography variant='subtitle2'>
										{item.title}
									</Typography>
								</Link>
							</ListItemText>
							{item.subitems &&
								<ListItemIcon
									className={styles.subitemButton}
									onClick={() => handleClick(item.title)}>
									{state[item.title] ? <ExpandMore /> : <KeyboardArrowRight />}
								</ListItemIcon>}
						</ListItem>
						{item.subitems?.map((subitem, index) => (
							<Collapse key={index} in={state[item.title]} timeout="auto" unmountOnExit>
								<Link href={subitem.link} passHref>
									<ListItem
										button
										onClick={() => setDrawerOpen(false)}
									>
										<ListItemIcon className={styles.icon}>

										</ListItemIcon>
										<ListItemText>
											<Typography variant='subtitle2'>
												{subitem.title}
											</Typography>
										</ListItemText>
									</ListItem>
								</Link>
							</Collapse>
						))}
					</Box>
				))}
			</List>
		</Drawer>
	)
};

export default DrawerBar;