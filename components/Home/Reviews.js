import { useState, useRef } from 'react';

import {
	Box,
	Slide,
	makeStyles,
	Typography,
	Button,
	useTheme,
	useMediaQuery
} from '@material-ui/core';

import {
	KeyboardArrowRightOutlined,
	KeyboardArrowLeftOutlined,
} from '@material-ui/icons';

const review = [
	{
		review: 'I have used the IT services for months. Their excellent knowledge of IT solutions, attention to detail and fast response are invaluable',
		firstname: 'Marjan',
		lastname: 'Salmaini',
		//company: 'MERRICK ARCHITECTURE LTD.'
	},
	{
		review: 'They take the headache off of technology. We benefit from their reliability and availability, they take time to learn how we operate our business and they grow with us',
		firstname: 'Redwan',
		lastname: 'Hassan',
	}
]

const Works = () => {
	const theme = useTheme();
	const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

	const useStyles = makeStyles((theme) => {
		return {
			page: {
				width: '100%',
				height: '100%vh',
				paddingTop: theme.spacing(8),
				paddingBottom: theme.spacing(8),
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				overflow: 'hidden',
			},
			sectionTitle: {
				fontSize: '26px',
				fontWeight: 'bold',
				textAlign: 'center',
				color: theme.palette.primary.main,
				marginBottom: theme.spacing(6),
			},
			carouselContainer: {
				width: isMdUp ? '70%' : '95%',
				minHeight: '200px',
				maxHeight: '200px',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
			},
			carousel: {
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			},
			carouselText: {
				fontSize: isMdUp ? 26 : 18,
				textAlign: 'center',
				marginBottom: theme.spacing(3),
			},
			carouselSubtext: {
				fontWeight: 'bold',
				fontSize: isMdUp ? 20 : 15,
				color: '#32CD32',
				marginBottom: theme.spacing(1),
				textAlign: 'center',
			},
			carouselAdditionalText: {
				fontWeight: 'bold',
				textAlign: 'center',
			},
			button: {
				height: '200px'
			}
		}
	});

	const styles = useStyles();
	const containerRef = useRef(null);
	const [animation, setAnimation] = useState(true);
	const [reviewIndex, setReviewIndex] = useState(0);
	const [direction, setDirection] = useState('right');

	const handleBackwardClick = () => {

		setDirection('left');
		setAnimation(false);

		setTimeout(() => {
			setReviewIndex((prev) => prev === 0 ? review.length - 1 : (prev - 1) % review.length)
			setDirection('right');
			setAnimation(true);
		}, 350);
	}

	const handleForwardClick = () => {

		setDirection('right');
		setAnimation(false);

		setTimeout(() => {
			setReviewIndex((prev) => (prev + 1) % review.length);
			setDirection('left');
			setAnimation(true);
		}, 350);
	}

	return (
		review &&
		<Box className={styles.page}>
			<Typography className={styles.sectionTitle}>
				Hear about our Managed IT Services directly from our Clients
			</Typography>
			<Box ref={containerRef} className={styles.carouselContainer}>
				<Button
					variant='text'
					color='primary'
					className={styles.button}
					onClick={() => handleBackwardClick()}
				>
					<KeyboardArrowLeftOutlined />
				</Button>
				<Slide in={animation} direction={direction} container={containerRef.current}>
					<Box className={styles.carousel}>
						<Typography className={styles.carouselText}>
							{'"' + review[reviewIndex]?.review.slice(0, 160) + '..."'}
						</Typography>
						<Typography className={styles.carouselSubtext}>{review[reviewIndex]?.firstname} {review[reviewIndex]?.lastname}</Typography>
						<Typography className={styles.carouselAdditionalText}>{review[reviewIndex]?.company}</Typography>
					</Box>
				</Slide>
				<Button
					variant='text'
					color='primary'
					className={styles.button}
					onClick={() => handleForwardClick()}
				>
					<KeyboardArrowRightOutlined />
				</Button>

			</Box>

		</Box>
	);
};

export default Works;
