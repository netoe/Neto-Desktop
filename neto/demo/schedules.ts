//

import {doAsyncPlayBackgroundAudio, SOUNDS_TYPE} from '../actions/play-audio.js';
import {Schedule} from '../scheduler/schedule.js';
import {CronTimer} from '../scheduler/timer/cron-timer.js';


const schedules = [
	new Schedule('Hourly Timer', new CronTimer('0'), () => {
		console.log('Hourly timer,,,,');
		doAsyncPlayBackgroundAudio(SOUNDS_TYPE.ERROR, 2);
	}),
	new Schedule('Half-Hour Timer', new CronTimer('30'), () => {
		console.log('Half-Hourly timer,,,,');
		doAsyncPlayBackgroundAudio(SOUNDS_TYPE.WARNING);
	}),
	new Schedule('25/55-Minute Timer', new CronTimer('25,55'), () => {
		console.log('25/55-Minute Timer,,,,');
		doAsyncPlayBackgroundAudio(SOUNDS_TYPE.IMPORTANT, 2);
	}),
	new Schedule('A5-Minute Timer', new CronTimer('5,15,35,45'), () => {
		console.log('A5-Minute Timer,,,,');
		doAsyncPlayBackgroundAudio(SOUNDS_TYPE.REGULAR);
	}),
	new Schedule('B5-Minute Timer', new CronTimer('10,20,40,50'), () => {
		console.log('B5-Minute Timer,,,,');
		doAsyncPlayBackgroundAudio(SOUNDS_TYPE.GENERAL);
	}),
];

export const mDemoSchedules = schedules;

// setTimeout(() => {
// 	scheduler.running = false;
// }, 5 * 60 * 1000);
