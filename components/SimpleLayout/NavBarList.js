import {
	Box,
	Card,
	List,
	CardContent,
	ListItemText,
	Typography,
	ListItem,
	makeStyles,
} from '@material-ui/core';

import Link from 'next/link';

const useStyles = makeStyles((theme) => {
	return {
		root: {
			display: 'block',
			position: 'absolute',
			minWidth: theme.spacing(28),
			borderRadius: 20
		},
		cardcontent: {
			padding: theme.spacing(0),
			"&:last-child": {
				paddingBottom: theme.spacing(0),
			},
			backgroundColor: theme.palette.secondary.light,

		},
		listitem: {
			textAlign: 'left',
			paddingLeft: theme.spacing(5),
			paddingRight: theme.spacing(5),
		}
	}
});

function NavBarList({ items }) {
	const styles = useStyles();

	return (
		<Box className={styles.root}>
			<Card>
				<CardContent className={styles.cardcontent}>
					<List>
						{items.map((item, index) => (
							<Link key={index} href={item.link} passHref>
								<ListItem
									button
									classes={{ root: styles.listitem }}
								>
										<ListItemText>
											<Typography variant='subtitle2'>
												{item.title}
											</Typography>
										</ListItemText>
								</ListItem>
							</Link>
						))}
					</List>
				</CardContent>
			</Card>
		</Box>
	)
}

export default NavBarList;
