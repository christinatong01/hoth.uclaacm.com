import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import StickyTimeSlot from '../SchedulePage/StickyTimeSlot';
import workshopSchedule from '../../data/WorkshopSchedule';

const useStyles = makeStyles(theme => ({
	title: {
		fontWeight: 'bold',
		paddingTop: theme.spacing(11),
		paddingBottom: theme.spacing(4)
	},
	divider: {
		height: '2px',
		marginLeft: theme.spacing(4),
		marginRight: theme.spacing(4),
		marginBottom: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(7),
			marginRight: theme.spacing(7),
			marginBottom: theme.spacing(9)
		}
	}
}));

const SchedulePage = () => {
	const classes = useStyles();
	return <Container maxWidth='md'>
		<Typography align='left' component='h1' variant='h4' className={classes.title}>Schedule</Typography>
		<List>
			{workshopSchedule.map((timeslot, index) => {
				return (
					<React.Fragment key={timeslot.startTime}>
						<li>
							<StickyTimeSlot events={timeslot.events} time={timeslot.startTime} />
							{index === workshopSchedule.length - 1 ? null : <Divider className={classes.divider} />}
						</li>
					</React.Fragment>);
			})}
		</List>
	</Container>;
};

export default SchedulePage;
