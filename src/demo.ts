//

import {Schedule} from './scheduler/schedule';
import {Scheduler} from './scheduler/scheduler';
import {CronTimer} from './scheduler/timer/cron-timer';


const schedules = [
	new Schedule('Hourly Timer', new CronTimer('0'), () => {
		console.log('Hourly timer,,,,');
	}),
	new Schedule('Half-Hour Timer', new CronTimer('30'), () => {
		console.log('Half-Hourly timer,,,,');
	}),
	new Schedule('25/55-Minute Timer', new CronTimer('25,55'), () => {
		console.log('25/55-Minute Timer,,,,');
	}),
	new Schedule('A5-Minute Timer', new CronTimer('5,15,35,45'), () => {
		console.log('A5-Minute Timer,,,,');
	}),
	new Schedule('B5-Minute Timer', new CronTimer('10,20,40,50'), () => {
		console.log('B5-Minute Timer,,,,');
	}),
];

const scheduler = new Scheduler(schedules);
scheduler.verbose = true;
scheduler.doStartSchedules();

// setTimeout(() => {
// 	scheduler.running = false;
// }, 5 * 60 * 1000);
