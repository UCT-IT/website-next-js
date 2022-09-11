import { useState } from 'react'

import {
	Box,
	Button,
	List,
	ListItem,
	ListItemText,
	AppBar,
	Toolbar,
	Typography,
	makeStyles,
} from '@material-ui/core'

import Link from 'next/link';

import {
	ExpandMore,
	MenuOutlined
} from '@material-ui/icons';

import NavBarList from './NavBarList';
import Drawer from './Drawer';
import Image from 'next/image';

const useStyles = makeStyles((theme) => {
	return {
		appbar: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			padding: theme.spacing(0.5),
			backgroundColor: theme.palette.primary.main,
		},
		menuButton: {
			color: theme.palette.secondary.main,
			minWidth: theme.spacing(1)
		},
		title: {
			marginLeft: theme.spacing(1),
			fontSize: 32,
			fontWeight: 'bold',
		},
		listitem: {
			cursor: 'pointer',
			paddingLeft: theme.spacing(4),
			paddingRight: theme.spacing(4),
		},
		listitemtext: {
			fontWeight: 'bold'
		}
	}
});

function NavBar({ logo, title, items, breakpointUp }) {
	const styles = useStyles();

	const [state, setState] = useState({});
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleHover = (e, b) => {
		setState(() => {
			return { [e]: b };
		});
	}

	return (
		<Box>
			<AppBar
				className={styles.appbar}
				elevation={0}
			>
				<Toolbar>
					<Image src={logo} width={50} height={50} alt='logo'/>
					<Typography className={styles.title}>{title}</Typography>
				</Toolbar>
				<Toolbar>
					{breakpointUp &&
						<Box>
							<List style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center'
							}}>

								{items?.map((item, index) => (
									<Box
										key={index}
										onMouseOver={() => item.subitems && handleHover(item.title, true)}
										onMouseLeave={() => item.subitems && handleHover(item.title, false)}
									>
										<ListItem
											className={styles.listitem}
										>
											<Link href={item.link} passHref>
												<ListItemText>
													<Typography className={styles.listitemtext}>
														{item.title}
													</Typography>
												</ListItemText>
											</Link>
											{item.subitems && <ExpandMore />}
										</ListItem>

										{state[item.title] && <NavBarList items={item.subitems} />}
									</Box>
								))}
							</List>
						</Box>

					}
					{!breakpointUp &&
						<Button className={styles.menuButton} onClick={() => setDrawerOpen(true)}>
							<MenuOutlined />
						</Button>
					}
				</Toolbar>
			</AppBar>
			{!breakpointUp &&
				<Drawer
					logo={logo}
					title={title}
					drawerItems={items}
					drawerOpen={drawerOpen}
					setDrawerOpen={setDrawerOpen}
				/>
			}
		</Box>
	)
}

export default NavBar;
