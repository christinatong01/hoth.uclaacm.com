import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';

import SvgImg from '../SvgImg';
import wrench from '../../images/wrench.svg';

const useStyles = makeStyles({
	title: {
		textAlign: 'center',
		margin: '60px 10px 30px',
		fontSize: '2em',
		fontWeight: 700
	},
	wrench: {
		width: '40px',
		marginTop: '30px'
	}
});

export default function PrizeHeader() {
	const classes = useStyles();

	return (
		<Box display='flex' justifyContent='center' alignItems='center'>
			<SvgImg src={wrench} className={classes.wrench} height={39} width={62} />
			<Typography variant='h3' component='h2' className={classes.title}>
				Prize Tracks
			</Typography>
			<SvgImg src={wrench} className={classes.wrench} height={39} width={62}
				style={{ transform: 'rotate(180deg)' }} />
		</Box>
	);
}
